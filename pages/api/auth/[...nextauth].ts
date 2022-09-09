import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next/types';
import prisma from '@config/prisma';

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      // @ts-ignore
      clientId: process.env.AUTH0_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
};

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, options);
}
