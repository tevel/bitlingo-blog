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
      
      // Handle redirects
      if (url.pathname === '/blog' || url.pathname === '/blog/') {
        return Response.redirect(`${url.origin}/blog/en/${url.search}`, 308);
      }
      
      // Handle /blog/en (no trailing slash) -> redirect to /blog/en/
      if (url.pathname === '/blog/en') {
        return Response.redirect(`${url.origin}/blog/en/${url.search}`, 308);
      }
      
      // Normalize blog paths: ensure trailing slash for directory-like paths
      let normalizedPath = url.pathname;
      // If it's a blog path that looks like a directory (no file extension), ensure trailing slash
      if (normalizedPath.startsWith('/blog/') && 
          !normalizedPath.match(/\.(html|css|js|json|xml|svg|woff|woff2|jpg|jpeg|png|gif|webp|ico)$/i) &&
          !normalizedPath.endsWith('/')) {
        normalizedPath = normalizedPath + '/';
      }
      
      // Proxy to Pages project
      const pagesUrl = `https://bitlingo-blog.pages.dev${normalizedPath}${url.search}`;
      
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
        
        // CRITICAL: Always ensure Content-Type is set correctly
        // Pages may return empty or incorrect Content-Type, so we infer from file extension
        // Use normalizedPath since that's what we're fetching
        const existingContentType = newHeaders.get('Content-Type');
        let contentTypeToSet = existingContentType;
        
        // If Content-Type is missing, empty, or doesn't match file type, infer it
        if (!existingContentType || existingContentType.trim() === '') {
          if (normalizedPath.endsWith('.css')) {
            contentTypeToSet = 'text/css; charset=utf-8';
          } else if (normalizedPath.endsWith('.js')) {
            contentTypeToSet = 'application/javascript; charset=utf-8';
          } else if (normalizedPath.endsWith('.woff')) {
            contentTypeToSet = 'font/woff';
          } else if (normalizedPath.endsWith('.woff2')) {
            contentTypeToSet = 'font/woff2';
          } else if (normalizedPath.endsWith('.svg')) {
            contentTypeToSet = 'image/svg+xml';
          } else if (normalizedPath.endsWith('.json')) {
            contentTypeToSet = 'application/json';
          } else if (normalizedPath.endsWith('.html') || normalizedPath.endsWith('/')) {
            contentTypeToSet = 'text/html; charset=utf-8';
          }
          
          // Always set Content-Type if we inferred it
          if (contentTypeToSet) {
            newHeaders.set('Content-Type', contentTypeToSet);
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
