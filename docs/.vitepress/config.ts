import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nice-auth-utils",
  description: "A utility library for NICE authentication",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    sidebar: {
      "/guide/": [
        {
          text: "가이드",
          items: [
            {
              text: "Why nice-auth-utils?",
              link: "/guide/why",
            },
            {
              text: "시작하기",
              link: "/guide/",
            },
            { text: "Markdown Examples", link: "/guide/markdown-examples" },
            { text: "Runtime API Examples", link: "/guide/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/KJWHUB/nice-auth-utils" },
    ],
  },

  locales: {
    root: {
      label: "한국어",
      lang: "ko-KR",
    },
    en: {
      label: "English",
      lang: "en-US",
    },
  },
});
