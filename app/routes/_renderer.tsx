import { jsxRenderer } from 'hono/jsx-renderer'
import { BasicLayout } from '~/layouts/BasicLayout'
import { siteConfig } from '../../siteConfig'

export default jsxRenderer(({ children, title }) => {
  return (
    <BasicLayout
      config={{
        ...siteConfig,
        pageTitle: title,
      }}
    >
      {children}
    </BasicLayout>
  )
})
