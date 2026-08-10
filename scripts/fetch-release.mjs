import {stat, mkdir, writeFile} from "node:fs/promises";
import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const REPO = "retrooper/packetevents";
// release v2.4.0; blog posts are only generated for this release and newer
const MIN_RELEASE_ID = 163236519;
const BLOG_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "content", "blog");

async function fetchJson(url) {
    const res = await fetch(url, {
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

async function fetchReleases() {
    const releases = [];
    let page = 1;
    while (true) {
        const batch = await fetchJson(
            `https://api.github.com/repos/${REPO}/releases?per_page=100&page=${page}`,
        );
        if (batch.length === 0) {
            break;
        }
        releases.push(...batch);
        if (batch.length < 100) {
            break;
        }
        page++;
    }
    return releases;
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

async function ensureDir(dir) {
    try {
        await stat(dir);
    } catch {
        await mkdir(dir, {recursive: true});
    }
}

async function pathExists(filepath) {
    try {
        await stat(filepath);
        return true;
    } catch {
        return false;
    }
}

async function generatePost(release) {
    const /**@type string*/ tag = release.tag_name;
    const version = tag.replace(/^v/, "");
    const filepath = join(BLOG_DIR, tagToFilename(tag));
    if (await pathExists(filepath)) {
        console.log(`Blog post for ${version} already exists, skipping.`);
        return;
    }
    const title = `Release ${version}`;
    const date = formatDate(release.published_at);
    const body = (release.body ?? "").trim();
    const content = `---
title: "${title}"
date: ${date}
---

${body}
`;
    await writeFile(filepath, content, "utf-8");
    console.log(`Created blog post: ${filepath}`);
}

await ensureDir(BLOG_DIR);

const releases = await fetchReleases();
const eligible = releases
    .filter((release) => !release.draft && !release.prerelease && release.id >= MIN_RELEASE_ID)
    .sort((a, b) => a.id - b.id);

for (const release of eligible) {
    await generatePost(release);
}

console.log(`Processed ${eligible.length} releases.`);
