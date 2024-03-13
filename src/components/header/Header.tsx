import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Routes from '../../routes'


const NavItem: React.FC = () => {

    return (
        <>
            {
                Routes.map((route) => {
                    if (route.isOnHeader) {
                        return (
                            <li className={styles.navItem}>
                                <Link to={route.path}>{route.title.toUpperCase()}</Link>
                            </li>
                        )
                    }
                })
            }
        </>
    )
}

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <NavItem />
                </ul>
            </nav>
        </header>
    );
}

export default Header;
