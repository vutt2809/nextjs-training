import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UserDetailPage() {
    const router = useRouter();

    console.log('router: ', router.pathname);

    const handleOnClick = () => {
        router.push('/');
    };

    return (
        <div>
            <h2>User Details Page</h2>
            <Link href="/about">Go to about Page</Link>
            <button onClick={handleOnClick}>Go to HomePage</button>
        </div>
    );
}
