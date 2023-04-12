import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  resolve: {
    extensions: [".ts", ".vue", ".js", ".tsx"],
    alias: {
      "src/": `${path.resolve(__dirname, "src")}/`,
      "test/": `${path.resolve(__dirname, "test")}/`,
      "types/": `${path.resolve(__dirname, "types")}/`,
    },
  },
  plugins: [vue(), jsx()],
  build: {
    target: "modules",
    polyfillModulePreload: false,
    lib: {
      entry: "src/index",
      name: "icon",
      formats: ["es"],
      fileName: "icon"
    },
    sourcemap: true,
    manifest: false,
    rollupOptions: {
      external: [
        /^lodash/i,
        /^vue/i,
        /^@ue/i,
        /@ant-design/i,
        /@fengqiaogang/i,
        /ant-design-vue/i,
      ],
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
