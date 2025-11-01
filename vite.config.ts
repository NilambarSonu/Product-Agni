import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  base: "/", // Use absolute paths for production
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      // THIS IS THE NEW LINE YOU WERE MISSING
      "@assets": path.resolve(__dirname, "client/src/assets"),

      // This one you already had
      "@": path.resolve(__dirname, "client/src"),
    },
  },
});