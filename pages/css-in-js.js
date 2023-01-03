import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

export default function CSSJS() {
    return (
        <>
            <Navbar />
            <Title>Styles Component</Title>
            <h2 style={{ color: 'red' }}>Hello world</h2>
        </>
    );
}

CSSJS.auth = true;
