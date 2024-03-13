import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import PathConstants from "./../../routes/pathConstants";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to={PathConstants.HOME.path}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to={PathConstants.DATA.path}>Data</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to={PathConstants.SETTINGS.path}>Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
