/**
 * Cloudflare Worker to proxy /blog* requests to Pages project
 * This allows bitlingo.app/blog to serve content from the Pages project
 * without affecting the main app at bitlingo.app
 * 
 * Updated: Configured to deploy Worker code instead of static assets
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Proxy static assets and blog paths to Pages project
    // Static assets are referenced from blog pages and need to be proxied too
    const shouldProxy = 
      url.pathname.startsWith('/blog') ||
      url.pathname.startsWith('/_astro/') ||
      url.pathname.startsWith('/fonts/') ||
      url.pathname.startsWith('/favicon.svg') ||
      url.pathname.startsWith('/manifest.json') ||
      url.pathname.startsWith('/sw.js') ||
      url.pathname.startsWith('/offline.html') ||
      url.pathname.startsWith('/sitemap') ||
      url.pathname.startsWith('/rss.xml');
    
    if (shouldProxy) {
      // Handle /blog and /blog/ redirects to /blog/en/
      if (url.pathname === '/blog' || url.pathname === '/blog/') {
        return Response.redirect(`${url.origin}/blog/en/${url.search}`, 308);
      }
      
      // Proxy to Pages project
      const pagesUrl = `https://bitlingo-blog.pages.dev${url.pathname}${url.search}`;
      
      try {
        // Forward the request to Pages project
        const response = await fetch(pagesUrl, {
          method: request.method,
          headers: {
            // Forward important headers
            'Accept': request.headers.get('Accept') || '*/*',
            'Accept-Language': request.headers.get('Accept-Language') || '',
            'Accept-Encoding': request.headers.get('Accept-Encoding') || '',
            'User-Agent': request.headers.get('User-Agent') || '',
            'Referer': request.headers.get('Referer') || '',
          },
          body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
        });
        
        // Check if response is ok
        if (!response.ok) {
          console.error(`Pages fetch failed: ${response.status} ${response.statusText} for ${pagesUrl}`);
          return new Response(
            `Error proxying to Pages: ${response.status} ${response.statusText}`,
            { status: response.status }
          );
        }
        
        // Create new headers, preserving Content-Type and other important headers
        const newHeaders = new Headers(response.headers);
        
        // For static assets, allow longer caching
        if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/fonts/')) {
          newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          // For HTML pages, prevent caching
          newHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
          newHeaders.set('CDN-Cache-Control', 'public, max-age=0, must-revalidate');
          newHeaders.set('Cloudflare-CDN-Cache-Control', 'public, max-age=0, must-revalidate');
        }
        
        // Ensure CORS headers for cross-origin requests
        newHeaders.set('Access-Control-Allow-Origin', '*');
        
        // Return response with modified headers
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      } catch (error) {
        console.error(`Error proxying to Pages: ${error.message}`, error);
        return new Response(
          `Error proxying to Pages: ${error.message}`,
          { status: 502 }
        );
      }
    }
    
    // For non-blog paths, let the request pass through to the main app
    // This will be handled by your existing Workers routing
    return fetch(request);
  },
};
