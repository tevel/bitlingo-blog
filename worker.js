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
      // Proxy to Pages project
      const pagesUrl = `https://bitlingo-blog.pages.dev${url.pathname}${url.search}`;
      
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
        
        // Get the response body as text first to ensure we can read it
        const body = await response.text();
        
        // Create a new response with the Pages content
        const newResponse = new Response(body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...Object.fromEntries(response.headers),
            // Override cache headers to prevent stale content
            'Cache-Control': 'public, max-age=0, must-revalidate',
            'CDN-Cache-Control': 'public, max-age=0, must-revalidate',
            'Cloudflare-CDN-Cache-Control': 'public, max-age=0, must-revalidate',
            // Ensure CORS headers are set if needed
            'Access-Control-Allow-Origin': '*',
            // Ensure content type is preserved
            'Content-Type': response.headers.get('Content-Type') || 'text/html',
          },
        });
        
        return newResponse;
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
