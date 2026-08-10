import {stat, mkdir, writeFile} from "node:fs/promises";
import {join, dirname} from "node:path";
import { fileURLToPath } from "node:url";

const REPO = "retrooper/packetevents";
const BLOG_DIR = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "src",
    "content",
    "blog",
);

async function fetchLatestRelease() {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "packetevents-site fetch",
        },
    });
    if (!res.ok) {
        throw new Error(`GitHub API returned ${res.status}: ${await res.text()}`);
    }
    return res.json();
}

function tagToFilename(tag) {
    const stripped = tag.replace(/^v/, "");
    const slug = stripped.replace(/\./g, "-");
    return `release-${slug}.md`;
}

function formatDate(isoDate) {
    const d = new Date(isoDate);
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const release = await fetchLatestRelease();

const /**@type string*/tag = release.tag_name;
const version = tag.replace(/^v/, "");
const filename = tagToFilename(tag);
const filepath = join(BLOG_DIR, filename);
const title = `Release ${version}`;
const date = formatDate(release.published_at);

if (!await stat(BLOG_DIR)) {
    await mkdir(BLOG_DIR, {recursive: true});
}

if (await stat(filepath)) {
    console.log(`Blog post for ${version} already exists, skipping.`);
    process.exit(0);
}

const body = (release.body ?? "").trim();

const content = `---
title: "${title}"
date: ${date}
---

${body}
`;

await writeFile(filepath, content, "utf-8");
console.log(`Created blog post: ${filepath}`);
