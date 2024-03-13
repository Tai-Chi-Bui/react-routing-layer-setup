import React from 'react';
import styles from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <p className={styles.copyRight}>© {new Date().getFullYear()} Tai's React App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
