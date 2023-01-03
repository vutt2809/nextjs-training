import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Auth({ children }) {
    const router = useRouter();

    const { data: session, status, token } = useSession();
    const isUser = !!session?.user;

    useEffect(() => {
        if (status === 'loading') return; // Do nothing while loading
        if (!isUser) router.push('/login'); //Redirect to login
    }, [isUser, status]);

    if (isUser) {
        return children;
    }
    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return <div>Loading...</div>;
}
