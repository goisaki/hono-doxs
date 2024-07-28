import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import mdx from '@mdx-js/rollup'
import honox from 'honox/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { type UserConfig, defineConfig } from 'vite'

const config: UserConfig = {
	plugins: [
		honox({ devServer: { adapter } }),
		mdx({
			jsxImportSource: 'hono/jsx',
			remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
		}),
		pages(),
	],
}
export default defineConfig(({ mode }) => {
	if (mode === 'client') {
		config.build = {
			rollupOptions: {
				input: ['/app/styles/tailwind.css'],
				output: {
					assetFileNames: 'static/assets/[name].[ext]',
				},
			},
		}
		return config
	}
	return config
})
