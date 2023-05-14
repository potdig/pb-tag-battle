import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/bundles/pb-tag-battle/',
  build: {
    rollupOptions: {
      input: {
        'graphics/index': resolve(__dirname, 'graphics/index.html'),
        'graphics/result': resolve(__dirname, 'graphics/result.html'),
        'dashboard/count-up': resolve(__dirname, 'dashboard/count-up.html'),
        'dashboard/runners': resolve(__dirname, 'dashboard/runners.html'),
        'dashboard/orders': resolve(__dirname, 'dashboard/orders.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
