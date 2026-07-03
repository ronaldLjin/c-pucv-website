import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from a custom domain (c-pucv.ca) at the root, so base is "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
