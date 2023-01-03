import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Contact.module.scss';

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <h2 className={styles.highlightscss}>Contact Page</h2>
        </div>
    );
}

ContactPage.auth = true;
