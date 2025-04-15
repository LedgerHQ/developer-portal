import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === "partner",
  }
})

// 2024-01-17 - To add login protection to your page, add the path in the ["...."] below, 
export const config = { matcher: ["/docs/folder/page/:path*", "/docs/folder/page/:path*"] }
