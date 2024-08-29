import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nice-auth-utils",
  description: "A utility library for NICE authentication",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

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
