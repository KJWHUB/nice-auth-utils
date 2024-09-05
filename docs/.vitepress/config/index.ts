import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { ko } from "./ko";
import { en } from "./en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: "한국어", ...ko },
    en: { label: "English", ...en },
  },
});
