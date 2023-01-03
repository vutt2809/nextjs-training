import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';

const Navigation = styled.div`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 12px 24px;
    background-color: #b91c1c;
`;

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <Navigation>
            <a> User name: {session ? session.user.name : ''}</a>
            &nbsp;
            <button
                onClick={() => {
                    signOut({ redirect: false, callbackUrl: '/login' });
                }}
            >
                Signout
            </button>
        </Navigation>
    );
}
