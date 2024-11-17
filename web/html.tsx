import { Child } from "hono/jsx"

export default ({ children }: { children?: Child }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Root stylesheet */}
      <link rel="stylesheet" href="/styles/style.css" />

      {/* Use favicon */}
      <link rel="shortcut icon" type="image/jpg" href="/favicon.png" />

      <title>Hello, World</title>
    </head>

    <body>
      {children}
    </body>
  </html>
)
