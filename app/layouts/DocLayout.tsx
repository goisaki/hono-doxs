import { PartialSiteConfig } from '~/global'
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

export function DocLayout({ children, docConfig, ...props }: DocProps) {
  const { sidebar } = defu(defaultDocConfig, docConfig) as DocConfig
  return (
    <BasicLayout {...props}>
      <div class='markdown antialiased'>{children}</div>
    </BasicLayout>
  )
}
