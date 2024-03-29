import {
  unstable_cloudflarePreset as cloudflare,
  unstable_vitePlugin as remix,
} from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

export default defineConfig({
  plugins: [
    remix({
      presets: [cloudflare()],
    }),
    // define ~ as an alias for the app directory. https://remix.run/docs/en/main/future/vite#configure-path-aliases
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      externalConditions: ["workerd", "worker"],
    },
  },
})
