import { useRouter } from 'next/router';

export default function AboutPage() {
    const router = useRouter();

    console.log('About param: ', router.query);

    return (
        <div>
            <h2>About Page</h2>

            <p>Params: {JSON.stringify(router.query)}</p>
        </div>
    );
}

// SSR -> Generate HTML in Server -> Return client(Query information)
export async function getServerSideProps() {
    return {
        props: {},
    };
}
