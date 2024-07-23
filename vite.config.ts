import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import { pluginDoxs } from './src/pluginDoxs'
import { siteConfig } from './doxs.config'

export default defineConfig({
  plugins: [honox({ devServer: { adapter } }), pluginDoxs(siteConfig), pages()],
})
