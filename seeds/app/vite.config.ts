import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

/** Project Pages URL: https://anghel4d.github.io/broadside-observer/ */
const pagesBase = "/broadside-observer/";

export default defineConfig({
  // CI sets GITHUB_PAGES=true so asset URLs resolve under the project site path.
  // Local `file://` / `vite preview` keep a relative base.
  base: process.env.GITHUB_PAGES === "true" ? pagesBase : "./",
  plugins: [viteSingleFile()],
  resolve: {
    alias: {
      "cursor/canvas": fileURLToPath(new URL("./src/canvas/index.ts", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
  },
});
