import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", "index.ts"),
            name: "react-lazy-image",
            fileName: (format) => `react-lazy-image.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    plugins: [react(), cssInjectedByJsPlugin()],
});
