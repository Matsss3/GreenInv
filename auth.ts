import NextAuth, { type DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from '@auth/prisma-adapter'

import { getUserById } from "@/data/user";
import { db } from '@/lib/db';
import authConfig from '@/auth.config'
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole
    }
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      });
    }
  },
  
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTFAEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) return false;

        await db.tFConfirm.delete({
          where: {
            id: twoFactorConfirmation.id
          }
        });
      }

      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);

      if (!user) return token;

      token.role = user.role;

      return token;
    }
  },

  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})