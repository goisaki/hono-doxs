import { Child } from 'hono/jsx'
import { Link, Script } from 'honox/server'

type BasicProps = {
  title: string
  pageTitle?: string
  children: Child
}

export function BasicLayout({ pageTitle, children }: BasicProps) {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle ? `${pageTitle} - HonoX` : 'HonoX'}</title>
        <link rel='icon' href='/favicon.ico' />
        <Script src='/app/client.ts' async />
        <Link href='/app/styles/tailwind.css' rel='stylesheet' />
      </head>
      <body>{children}</body>
    </html>
  )
}
