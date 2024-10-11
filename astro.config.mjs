// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: "/src/assets/houston.webp",
        alt: "Re:Earth Visualizer",
      },
      title: {
        en: "Developer",
        ja: "開発者",
      },
      defaultLocale: "root",
      locales: {
        root: {
          lang: "en",
          label: "English",
        },
        ja: {
          label: "日本語",
        },
      },
      social: {
        github: "https://github.com/reearth/reearth-visualizer",
      },
      sidebar: [
        {
          label: "Introduction",
          translations: {
            ja: "はじめに",
          },
          autogenerate: { directory: "introduction" },
        },
        {
          label: "Getting Started",
          translations: {
            ja: "はじめる",
          },
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Core Concepts",
          translations: {
            ja: "コアコンセプト",
          },
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "Plugin API",
          translations: {
            ja: "プラグインAPI",
          },
          autogenerate: { directory: "plugin-api" },
        },
        {
          label: "Contribution Guide",
          translations: {
            ja: "貢献ガイド",
          },
          autogenerate: { directory: "contribution-guide" },
        },
        {
          label: "FAQ / Troubleshooting",
          translations: {
            ja: "FAQ / トラブルシューティング",
          },
          autogenerate: { directory: "faq-troubleshooting" },
        },
        {
          label: "Changelog",
          translations: {
            ja: "変更履歴",
          },
          autogenerate: { directory: "changelog" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
