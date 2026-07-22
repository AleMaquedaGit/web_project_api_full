import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/*/.{js,jsx,ts,tsx}"',
      },
    }),
  ],

  server: {
    port: 3000,
  },
});
