import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api/quote": {
        target: "https://zenquotes.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/quote/, "/api/random"),
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
