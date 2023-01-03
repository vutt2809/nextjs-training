import { useRouter } from 'next/router';

export default function PostParamPage() {
    const router = useRouter();

    console.log('Post param router: ', router.query);

    return (
        <div>
            <h2>Post Param Page</h2>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}

PostParamPage.auth = true;
