import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  json: {
    namedExports: true,
    stringify: false
  },
  base: '/',  // Critical for correct asset paths
  server: {
    fs: {
      allow: ['..']  // Allows accessing parent directories
    }
  }
})


