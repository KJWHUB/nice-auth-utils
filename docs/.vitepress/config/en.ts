import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    sidebar: {
      "/en/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Why nice-auth-utils?",
              link: "/en/guide/why",
            },
            {
              text: "Getting Started",
              link: "/en/guide/",
            },
            { text: "Markdown Examples", link: "/en/guide/markdown-examples" },
            { text: "Runtime API Examples", link: "/en/guide/api-examples" },
          ],
        },
      ],
    },
  },
});
