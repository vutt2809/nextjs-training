import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const user = {
                    id: 1,
                    name: 'Vu Tran',
                    email: 'admin@gmail.com',
                    password: '1111',
                };
                if (credentials.email === user.email && credentials.password === user.password) return user;
                throw new Error('Incorrect Credentials');
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token.id = user.id;
            return token;
        },
        session: async ({ session, token }) => {
            if (token) session.id = token.id;
            return session;
        },
    },
    secret: 'SECRET_HERE',
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60,
    },
    jwt: {
        secret: 'SECRET_HERE',
        encryption: true,
    },
});
