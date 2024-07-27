import type { Child } from 'hono/jsx'
import { Script } from 'honox/server'

export type SiteConfig = {
  title: string
  pageTitle?: string,
}

export function BasicLayout({
  config: { title, pageTitle },
  children,
}: {
  config: SiteConfig
  children: Child
}) {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
        <link rel='icon' href='/favicon.ico' />
        <Script src='/app/client.ts' async />
      </head>
      <body>{children}</body>
    </html>
  )
}
