import { Hono } from "hono"
import { jsxRenderer } from "hono/jsx-renderer"
import index from "~/web/html/index.tsx"
import Html from "~/web/html.tsx"
import { secureHeaders } from "hono/secure-headers"
import { serveStatic } from "hono/deno"

const router = new Hono()

// Include secure headers
router.use(secureHeaders())

// Resolve static assets
const staticHandler = serveStatic({ root: "/web/client" })
router.use("/styles/*", staticHandler)
router.use("/scripts/*", staticHandler)
router.use("/favicon.*", staticHandler)

// Render JSX templates to an HTML string
router.get("/*", jsxRenderer(Html, { docType: true }))

// Routes
router.route("/", index)

/**
 * `HTTP` request handler
 */
export const serve = router.fetch
