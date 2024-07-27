import { jsxRenderer } from 'hono/jsx-renderer'
import { DocLayout } from '~/layouts/DocLayout'

export default jsxRenderer(({ children, title }) => {
  return (
    <DocLayout
      config={{
        title: 'HonoX Docs',
        links: [
          {
            href: '/app/styles/markdown.css',
            rel: 'stylesheet',
          },
        ]
      }}
    >
      {children}
    </DocLayout>
  )
})
