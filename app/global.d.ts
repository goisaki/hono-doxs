import { } from 'hono'
import { Link, Script } from 'honox/server'

type ComponentProps<Component> = Parameters<Component>[0]
export type SiteConfig = {
  title: string
  pageTitle?: string
  links: ComponentProps<typeof Link>[]
  scripts: ComponentProps<typeof Script>[]
}
export type PartialSiteConfig = {
  title?: string
  pageTitle?: string
  links?: ComponentProps<typeof Link>[]
  scripts?: ComponentProps<typeof Script>[]
}
type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    Variables: {}
    Bindings: {}
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
