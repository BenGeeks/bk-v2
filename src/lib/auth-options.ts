import { NextAuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions: NextAuthOptions = {
   providers: [
      FacebookProvider({
         clientId: process.env.FACEBOOK_CLIENT_ID!,
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      }),
   ],
   pages: {
      signIn: '/login',
   },
   callbacks: {
      async jwt({ token, account }) {
         if (account) {
            token.accessToken = account.access_token;
         }
         return token;
      },
      async session({ session, token }) {
         if (session.user) {
            session.user.id = token.sub ?? '';
            session.accessToken = token.accessToken as string | undefined;
         }
         return session;
      },
   },
};
