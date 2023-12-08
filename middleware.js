import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "partner",
    },
  }
)

// 2023-10-19 - To access all protected pages locally, when the github app is not available, 
// comment out the line below
export const config = { matcher: ["/docs/eexchange/integration/:path*", "/docs/eexchange/flows/:path*", "/docs/eexchange/introduction"] }
