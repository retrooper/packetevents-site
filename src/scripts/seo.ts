export const SITE_URL = "https://packetevents.com";
const DEFAULT_LOGO = `${SITE_URL}/logo.png`;

export const absoluteUrl = (path = "/"): string =>
    new URL(path, SITE_URL).toString().replace(/\/+$/, "/");

export const stripMarkdown = (markdown: string): string =>
    markdown
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/!\[([^\]]*)]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
        .replace(/^\s{0,3}#{1,6}\s+/gm, "")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1")
        .replace(/_([^_]+)_/g, "$1")
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/\s+/g, " ")
        .trim();

interface Organization {
    "@type": "Organization";
    name: string;
    url: string;
    logo: {"@type": "ImageObject"; url: string};
    sameAs: string[];
}

export const organization = (): Organization => ({
    "@type": "Organization",
    name: "packetevents",
    url: `${SITE_URL}/`,
    logo: {"@type": "ImageObject", url: DEFAULT_LOGO},
    sameAs: [
        "https://github.com/retrooper/packetevents",
        "https://modrinth.com/plugin/packetevents",
        "https://discord.gg/DVHxPPxHZc",
    ],
});

export const website = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "packetevents",
    url: `${SITE_URL}/`,
    publisher: organization(),
    description:
        "PacketEvents is a protocol library tailored to Minecraft Java Edition, designed to facilitate the processing and transmission of packets.",
});

interface BlogPostingInput {
    title: string;
    description?: string;
    url: string;
    datePublished: Date;
    image?: string;
}

export const blogPosting = (input: BlogPostingInput) => {
    const publisher = organization();
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: input.title,
        description: input.description,
        image: input.image ?? DEFAULT_LOGO,
        datePublished: input.datePublished.toISOString(),
        dateModified: input.datePublished.toISOString(),
        mainEntityOfPage: {"@type": "WebPage", "@id": input.url},
        url: input.url,
        author: publisher,
        publisher,
    };
};

export const breadcrumb = (items: {name: string; url: string}[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});

interface FaqEntry {
    question: string;
    body?: string;
}

export const faqPage = (entries: FaqEntry[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: stripMarkdown(entry.body ?? ""),
        },
    })),
});
