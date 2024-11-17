import { Hono } from "hono"

const router = new Hono()

router.get("", (ctx) => {
  return ctx.render(
    <h1>Hello, World!</h1>,
  )
})

export default router
