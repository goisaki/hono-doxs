import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title, frontmatter }) => {
	return (
		<html lang='en'>
			<head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>{frontmatter ? frontmatter.title : title}</title>
				<link rel='icon' href='/favicon.ico' />
				<Script src='/app/client.ts' async />
				<Style />
			</head>
			<body>{children}</body>
		</html>
	)
})
