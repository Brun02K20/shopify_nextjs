import { env } from "app/config/env"
import { revalidateTag } from "next/cache"

// nedpoint de revalidacion de cache via tag
export async function POST(request: Request) {
  const body = await request.json()
  const {tag, token} = body
  // el token va a servir para validar si el usuario o la pesona que haga el post tiene los privilegios para poder hacerlo
  if (!tag || !token) {
    return Response.json({error: "Missing tag or token"}, {status: 400})
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({error: "Invalid Token"}, {status: 401})
  }

  revalidateTag(tag)

  return Response.json({success: true})
}