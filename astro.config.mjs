import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://morgantamayo.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
