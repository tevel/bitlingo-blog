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
    
    // Log for debugging
    console.log(`[Blog Worker] Request: ${url.pathname}`);
    
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
      console.log(`[Blog Worker] Proxying: ${url.pathname} -> bitlingo-blog.pages.dev${url.pathname}`);
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
          // If Pages returns 404, try without trailing slash or with index.html
          if (response.status === 404 && url.pathname.endsWith('/')) {
            const altUrl = pagesUrl.replace(/\/$/, '/index.html');
            const altResponse = await fetch(altUrl);
            if (altResponse.ok) {
              const altHeaders = new Headers(altResponse.headers);
              altHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
              altHeaders.set('Access-Control-Allow-Origin', '*');
              return new Response(altResponse.body, {
                status: altResponse.status,
                statusText: altResponse.statusText,
                headers: altHeaders,
              });
            }
          }
          return new Response(
            `Error proxying to Pages: ${response.status} ${response.statusText}`,
            { status: response.status }
          );
        }
        
        // Create new headers, preserving ALL headers from Pages response
        const newHeaders = new Headers(response.headers);
        
        // CRITICAL: Ensure Content-Type is preserved for all assets
        // If Content-Type is missing, infer it from file extension
        if (!newHeaders.get('Content-Type')) {
          if (url.pathname.endsWith('.css')) {
            newHeaders.set('Content-Type', 'text/css; charset=utf-8');
          } else if (url.pathname.endsWith('.js')) {
            newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
          } else if (url.pathname.endsWith('.woff') || url.pathname.endsWith('.woff2')) {
            newHeaders.set('Content-Type', 'font/woff');
          } else if (url.pathname.endsWith('.svg')) {
            newHeaders.set('Content-Type', 'image/svg+xml');
          } else if (url.pathname.endsWith('.json')) {
            newHeaders.set('Content-Type', 'application/json');
          }
        }
        
        // For static assets, allow longer caching
        if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/fonts/')) {
          newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          // For HTML pages, prevent caching
          newHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
          newHeaders.set('CDN-Cache-Control', 'public, max-age=0, must-revalidate');
          newHeaders.set('Cloudflare-CDN-Cache-Control', 'public, max-age=0, must-revalidate');
          
          // Block Mixpanel and other tracking scripts on blog pages
          // Only apply CSP to HTML pages
          if (response.headers.get('Content-Type')?.includes('text/html')) {
            const cspDirectives = [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://giscus.app",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://giscus.app https://api.github.com",
              "frame-src 'self' https://giscus.app",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ];
            // Block Mixpanel specifically
            newHeaders.set('Content-Security-Policy', cspDirectives.join('; '));
          }
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
