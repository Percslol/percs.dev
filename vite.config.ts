import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  ssr: {
    noExternal: ["svelte-hero-icons"]
  },
  server: { 
    port: process.env.PORT || 8080
  }
})
