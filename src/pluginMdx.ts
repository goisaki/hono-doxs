import mdx from '@mdx-js/rollup'

export const pluginMdxRollup = mdx({
  jsxImportSource: 'hono/jsx',
  rehypePlugins: [],
  remarkPlugins: [],
})
