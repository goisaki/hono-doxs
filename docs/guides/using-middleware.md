### Using Middleware

You can use Hono's Middleware in each root file with the same syntax as Hono. For example, to validate a value with the [Zod Validator](https://github.com/honojs/middleware/tree/main/packages/zod-validator), do the following:

```tsx
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const schema = z.object({
  name: z.string().max(10),
})

export const POST = createRoute(zValidator('form', schema), async (c) => {
  const { name } = c.req.valid('form')
  setCookie(c, 'name', name)
  return c.redirect('/')
})
```

Alternatively, you can use a `_middleware.(ts|tsx)` file in a directory to have that middleware applied to the current route, as well as all child routes. Middleware is run in the order that it is listed within the array.

```ts
// /app/routes/_middleware.ts
import { createRoute } from 'honox/factory'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'

export default createRoute(logger(), secureHeaders(), ...<more-middleware>)
```
