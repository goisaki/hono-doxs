import { PartialSiteConfig, SiteConfig } from '~/global'
import { BasicLayout, BasicProps } from './BasicLayout'
import { defu } from 'defu'

type DocConfig = {
  sidebar: string
}
type PartialDocConfig = {
  sidebar?: string
}
type DocProps = BasicProps & {
  docConfig?: PartialDocConfig
}

const defaultDocConfig: DocConfig = {
  sidebar: 'default',
}

export function DocLayout({ children, config, docConfig, ...props }: DocProps) {
  const { sidebar } = defu(defaultDocConfig, docConfig) as DocConfig
  const fullSiteConfig = defu(
    {
      links: [
        {
          href: '/app/styles/markdown.css',
          rel: 'stylesheet',
        },
        {
          href: '/app/styles/sidebar.css',
          rel: 'stylesheet',
        },
      ],
    } as PartialSiteConfig,
    config
  ) as SiteConfig

  return (
    <BasicLayout config={fullSiteConfig} {...props}>
      <div class='flex min-h-screen flex-col'>
        <header class='sidebar sticky top-0 z-10 w-full border-b bg-white'>
          <div class='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>

          </div>
        </header>
        <div class='markdown antialiased'>
          {children}
        </div>
      </div>
    </BasicLayout>
  )
}
