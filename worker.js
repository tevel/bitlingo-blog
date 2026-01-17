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
    
    // Only handle /blog* paths - proxy to Pages project
    if (url.pathname.startsWith('/blog')) {
      // Normalize pathname: /blog -> /blog/, /blog/ -> /blog/
      let pagesPath = url.pathname;
      if (pagesPath === '/blog') {
        pagesPath = '/blog/';
      }
      
      // Proxy to Pages project
      const pagesUrl = `https://bitlingo-blog.pages.dev${pagesPath}${url.search}`;
      
      try {
        // Forward the request to Pages project with cache busting
        const response = await fetch(pagesUrl, {
          method: request.method,
          headers: {
            // Only forward necessary headers
            'Accept': request.headers.get('Accept') || '*/*',
            'Accept-Language': request.headers.get('Accept-Language') || '',
            'User-Agent': request.headers.get('User-Agent') || '',
            // Add cache control to prevent stale content
            'Cache-Control': 'no-cache',
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
        
        // Create new headers with cache-busting
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
        newHeaders.set('CDN-Cache-Control', 'public, max-age=0, must-revalidate');
        newHeaders.set('Cloudflare-CDN-Cache-Control', 'public, max-age=0, must-revalidate');
        newHeaders.set('Access-Control-Allow-Origin', '*');
        
        // Return response with modified headers
        // Use response.clone() to get a fresh response with the same body
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
