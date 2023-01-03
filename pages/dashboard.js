import Navbar from '../components/Navbar/Navbar';

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <h1>secret dashboard</h1>;
        </>
    );
}

Dashboard.auth = true;
