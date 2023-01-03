import { useRouter } from 'next/router';

export default function PostDetailPage() {
    const router = useRouter();

    return (
        <div>
            <h2>Post Detail Page</h2>
            <p>Params: {JSON.stringify(router.query)}</p>
        </div>
    );
}

PostDetailPage.auth = true;
