import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { initializeDb } from "./server.ts";

if (!Deno.args.includes("build")) {
  await initializeDb();
}

export default defineConfig({
  plugins: [tailwind()],
});
