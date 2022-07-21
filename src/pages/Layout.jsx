import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';

import styles from './Layout.module.css';

export default function Layout() {
    return <>
        <Header />

        {/*ce qu'il y a dans la balise Suspense sa pourais que ce soit pas disponible immediatement */}
        <Suspense fallback={<div className={styles.spinner}></div>}>
            <Outlet />
        </Suspense>


    </>
}