import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ts-helpers-kit",
    },
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "/src"),
    },
  },
  plugins: [dts({ outDir: "dist" })],
});
