import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", "index.ts"),
            name: "react-lazy-image",
            fileName: (format) => `react-lazy-image.${format}.js`,
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react"],
        },
    },
    plugins: [react(), cssInjectedByJsPlugin(), dts()],
});
