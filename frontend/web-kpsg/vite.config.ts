import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Mengatur server agar dapat diakses melalui jaringan
    port: 3000, // (Opsional) Tetapkan port spesifik, default 5173
  },
});
