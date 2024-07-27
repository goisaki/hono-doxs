import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import mdx from '@mdx-js/rollup'
import inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths'
import honox from 'honox/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    honox({ devServer: { adapter } }),
    mdx({
      jsxImportSource: 'hono/jsx',
    }),
    inspect(),
    tsconfigPaths(),
    pages(),
  ],
})
