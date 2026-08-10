import type {APIRoute} from "astro";
import {getCollection} from "astro:content";
import Builder from "fast-xml-builder";

export const GET: APIRoute = async ({site}) => {
    const base = site!.toString().replace(/\/$/, "");

    const staticPaths = ["/", "/blog/", "/faq/"];

    const posts = (await getCollection("blog")).sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    );

    const urls = [
        ...staticPaths.map((path) => ({loc: base + path})),
        ...posts.map((post) => ({
            loc: `${base}/blog/${post.id}/`,
            lastmod: post.data.date.toISOString(),
        })),
    ];

    const sitemap = {
        "?xml": {
            "@_version": "1.0",
            "@_encoding": "UTF-8",
        },
        urlset: {
            "@_xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
            url: urls,
        },
    };

    const body = new Builder({
        ignoreAttributes: false,
        format: true,
        indentBy: "  ",
    }).build(sitemap);

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
