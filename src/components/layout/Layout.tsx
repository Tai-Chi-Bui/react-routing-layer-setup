import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
