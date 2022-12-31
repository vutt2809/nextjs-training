import Head from 'next/head';
import { useRouter } from 'next/router';

export default function AdminUserSetting() {
    const router = useRouter();

    console.log(router);

    return (
        <>
            <Head>
                <title>Admin User Setting Page</title>
            </Head>
            <h2>Admin User Setting Page </h2>
        </>
    );
}
