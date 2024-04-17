import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import partner from "../../../partners.json"

export default NextAuth({
  providers: [
    GitHubProvider({
      profile(profile) {
        return {
          id: profile.id,
          role: partners.github_ids.includes(profile.id) ? "partner" : "user" 
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    },
    async redirect({ url, baseUrl }) { return baseUrl }
  }
})