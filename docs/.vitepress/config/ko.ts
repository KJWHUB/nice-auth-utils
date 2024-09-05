import { defineConfig } from "vitepress";

export const ko = defineConfig({
  lang: "ko-KR",
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "가이드",
          items: [
            {
              text: "왜 nice-auth-utils?",
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
  },
});
