import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export default function Login() {
    const { status, loading } = useSession();
    const router = useRouter();
    const [error, setError] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    if (status === 'authenticated') {
        router.push('/');
    }
    const loginHandler = async (e) => {
        e.preventDefault();
        const { error } = await signIn('credentials', {
            redirect: false,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            callbackUrl: '/',
        });

        if (error) setError(error);
    };
    return (
        <>
            {status === 'unauthenticated' && (
                <>
                    <p>{status}</p>
                    <h3>{error}</h3>
                    <h3>Log in</h3>
                    <form onSubmit={(e) => loginHandler(e)}>
                        <input type="email" placeholder="Email" name="email" ref={emailRef} />
                        <input type="password" placeholder="Pasword" name="password" ref={passwordRef} />
                        <input type="submit" />
                    </form>
                </>
            )}
        </>
    );
}
