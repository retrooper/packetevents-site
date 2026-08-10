// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://packetevents.com",
    trailingSlash: "always",
    compressHTML: !import.meta.env.DEV,
    output: "static",

    image: {
        layout: "constrained",
    },

    vite: {
        plugins: [tailwindcss()],
    },

    build: {
        inlineStylesheets: "always",
    },
});
