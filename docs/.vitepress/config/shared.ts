import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: "nice-auth-utils",

  rewrites: {
    "ko/:rest*": ":rest*",
  },

  description: "A utility library for NICE authentication",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/KJWHUB/nice-auth-utils" },
    ],
  },
});
