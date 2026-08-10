import type {APIRoute, GetStaticPathsResult} from "astro";

const redirects = [
    "/discord https://discord.gg/DVHxPPxHZc",
];

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    return [{params: {"_redirects": "_redirects"}}];
};

export const GET: APIRoute = () => {
    return new Response(redirects.join("\n"), {
        status: 200,
        headers: {
            "Content-Type": "plain/text",
        },
    });
};
