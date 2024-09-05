import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
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
