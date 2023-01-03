import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Auth({ children }) {
    const router = useRouter();

    const { data: session, status, token } = useSession();
    const isUser = !!session?.user;

    useEffect(() => {
        if (status === 'loading') return;
        if (!isUser) router.push('/login');
    }, [isUser, status]);

    if (isUser) {
        return children;
    }
    return <div>Loading...</div>;
}
