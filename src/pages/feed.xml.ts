import type {APIRoute} from "astro";
import {getCollection} from "astro:content";
import Builder from "fast-xml-builder";

export const GET: APIRoute = async ({site}) => {
    const base = site!.toString().replace(/\/$/, "");

    const posts = (await getCollection("blog"))
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .slice(0, 20);

    const feed = {
        rss: {
            "@_version": "2.0",
            "@_xmlns:atom": "http://www.w3.org/2005/Atom",
            channel: {
                title: "packetevents",
                link: `${base}/blog/`,
                description: "Latest news and releases for PacketEvents, a Minecraft Java Edition protocol library.",
                "atom:link": {
                    "@_href": `${base}/feed.xml`,
                    "@_rel": "self",
                    "@_type": "application/rss+xml",
                },
                lastBuildDate: new Date().toUTCString(),
                item: posts.map((post) => ({
                    title: post.data.title,
                    link: `${base}/blog/${post.id}/`,
                    guid: `${base}/blog/${post.id}/`,
                    pubDate: post.data.date.toUTCString(),
                    description: post.data.summary ?? "",
                })),
            },
        },
    };

    const body = new Builder({
        ignoreAttributes: false,
        format: true,
        indentBy: "  ",
    }).build(feed);

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
};
