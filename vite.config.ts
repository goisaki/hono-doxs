import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    honox({ devServer: { adapter } }),
    mdx({
      jsxImportSource: 'hono/jsx',
    }),
    pages(),
  ],
})
