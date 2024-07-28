import { jsxRenderer } from 'hono/jsx-renderer'
import { DocLayout } from '~/layouts/DocLayout'

export default jsxRenderer(({ children, title }) => {
  return (
    <DocLayout title='HonoX Docs' pageTitle={title}>
      {children}
    </DocLayout>
  )
})
