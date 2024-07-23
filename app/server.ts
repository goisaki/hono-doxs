import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp({
  ROUTES: import.meta.glob(
    [
      // defaults
      '/app/routes/**/!(_*|*.test|*.spec).(ts|tsx|mdx)',
      '/app/routes/.well-known/!(_*|*.test|*.spec).(ts|tsx|mdx)',
      // docs
      '/docs/**/*.(md|mdx)',
    ],
    {
      eager: true,
    }
  ),
})

showRoutes(app)

export default app
