// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        dark: "/src/assets/ReearthLogoWhite.svg",
        light: "/src/assets/ReearthLogoColorful.svg",
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
        github: "https://github.com/reearth/visualizer.developer.reearth.io",
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
          label: "Core Concepts",
          translations: {
            ja: "コアコンセプト",
          },
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "Contribution Guide",
          translations: {
            ja: "貢献ガイド",
          },
          autogenerate: { directory: "contribution-guide" },
        },
        {
          label: "Frontend Development",
          autogenerate: { directory: "frontend-development" },
        },
        {
          label: "Backend Development",
          autogenerate: { directory: "backend-development" },
        },
        {
          label: "Plugin Development",
          autogenerate: { directory: "plugin-development" },
        },
        {
          label: "Plugin API Reference",
          autogenerate: { directory: "plugin-api" },
        },
        {
          label: "FAQ",
          translations: {
            ja: "FAQ",
          },
          autogenerate: { directory: "faq" },
        },
        {
          label: "Changelog",
          translations: {
            ja: "変更履歴",
          },
          autogenerate: { directory: "changelog" },
        },
      ],
      customCss: ["./src/styles/page.css", "./src/styles/custom.css"],
    }),
    icon(),
  ],
});
