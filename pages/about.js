import styled from 'styled-components';
import styles from '../styles/About.module.scss';

const Button = styled.button`
    font-size: ${({ theme }) => theme.sizes.large};
    color: ${({ theme }) => theme.colors.success};
    border-radius: 20px;
`;

export default function AboutPage() {
    return (
        <div>
            <h2 className={styles.highlightscss}>About Page</h2>
            <button className="btn btn-primary">Primary Button</button>
            <Button>Custom Button</Button>
        </div>
    );
}

AboutPage.auth = true;
