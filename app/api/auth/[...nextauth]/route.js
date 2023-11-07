import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
}














// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
/*
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST };
*/