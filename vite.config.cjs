const path = require("path");
const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const jsx = require("@vitejs/plugin-vue-jsx").default;

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
        /^vue/i,
        /ant-design/i,
      ],
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
