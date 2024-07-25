import { createFactory } from 'hono/factory'
import renderer from '../app/routes/_renderer'

const { createHandlers } = createFactory()
export const mdxRenderer = (mdxFile: () => string) => {
  return createHandlers(renderer, (c) =>
    c.render(
      <>
        This is mdxRenderer! <div dangerouslySetInnerHTML={{ __html: mdxFile() }} />
      </>
    )
  )
}
