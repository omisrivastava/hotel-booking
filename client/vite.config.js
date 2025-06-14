import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["5173-sudhansuura-hotelbookin-4f0ecwj7o8g.ws-us120.gitpod.io"]
  }
});
