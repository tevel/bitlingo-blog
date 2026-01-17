/**
 * Cloudflare Worker to proxy /blog* requests to Pages project
 * This allows bitlingo.app/blog to serve content from the Pages project
 * without affecting the main app at bitlingo.app
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Only handle /blog* paths - proxy to Pages project
    if (url.pathname.startsWith('/blog')) {
      // Proxy to Pages project
      const pagesUrl = `https://bitlingo-blog.pages.dev${url.pathname}${url.search}`;
      
      // Forward the request to Pages project
      const response = await fetch(pagesUrl, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers),
          // Remove host header to let Pages project handle it
          'Host': 'bitlingo-blog.pages.dev',
        },
        body: request.body,
      });
      
      // Create a new response with the Pages content
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          // Ensure CORS headers are set if needed
          'Access-Control-Allow-Origin': '*',
        },
      });
      
      return newResponse;
    }
    
    // For non-blog paths, let the request pass through to the main app
    // This will be handled by your existing Workers routing
    return fetch(request);
  },
};
