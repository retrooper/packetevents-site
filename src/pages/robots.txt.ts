import type {APIRoute} from "astro";

export const GET: APIRoute = (ctx) => {
    const body = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${new URL("/sitemap.xml", ctx.site).toString()}
`;

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
};
