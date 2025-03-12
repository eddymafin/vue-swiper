import { fileURLToPath, URL } from "node:url";
import postcssNested from "postcss-nested";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
        // スライダーのタグをカスタムエレメントとして扱う
        compilerOptions: {
          isCustomElement: (tag) => tag === "swiper-container" || tag === "swiper-slide",
        },
      },
    }),
    vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
