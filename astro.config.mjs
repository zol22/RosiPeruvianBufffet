// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), alpinejs(), mdx(), criticalCss()],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    experimental: {
        svg: true,
    },
});