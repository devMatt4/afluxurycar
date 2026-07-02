import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,

  pages: {
    signIn: "/admin/login",
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          return null;
        }

        const admins = [
          {
            id: "admin-1",
            name: "AFLUXURYCAR Admin",
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          },
          {
            id: "admin-2",
            name: "AFLUXURYCAR Admin 2",
            email: process.env.ADMIN_EMAIL2,
            password: process.env.ADMIN_PASSWORD2,
          },
        ];

        const admin = admins.find(
          (admin) => admin.email === email && admin.password === password
        );

        if (!admin?.email) {
          return null;
        }

        return {
          id: admin.id,
          name: admin.name,
          email: admin.email,
        };
      },
    }),
  ],
});