import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export const DocLayout = jsxRenderer(({ children }) => {
	return (
		<html lang='en'>
			<head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
				<Script src='/app/client.ts' async />
				<link
					rel='stylesheet'
					href={
						import.meta.env.PROD
							? '/static/assets/tailwind.css'
							: '/app/styles/tailwind.css'
					}
				/>
				<link
					rel='stylesheet'
					href={
						import.meta.env.PROD
							? '/static/assets/markdown.css'
							: '/app/styles/markdown.css'
					}
				/>
			</head>
			<body>
				<div class='markdown'>{children}</div>
			</body>
		</html>
	)
})
