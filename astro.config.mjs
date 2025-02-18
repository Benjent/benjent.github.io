import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://benjent.github.io/",
	integrations: [alpinejs(), tailwind()],
});
