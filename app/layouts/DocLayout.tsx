import { PartialSiteConfig } from '~/global'
import { BasicLayout, BasicProps } from './BasicLayout'

export type DocProps = BasicProps & {
  config: PartialSiteConfig & {
    sidebar: string
  }
}
export function DocLayout({ children, ...props }: DocProps) {
  const { sidebar } = props.config
  return (
    <BasicLayout {...props}>
      sidebar:{sidebar}
      <div class='markdown-root'>{children}</div>
    </BasicLayout>
  )
}
