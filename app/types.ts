export type Meta = {
	title: string
}
export type ContextRendererProps = [
	content: string | Promise<string>,
	meta?: Meta & {
		frontmatter?: Meta
	},
]
