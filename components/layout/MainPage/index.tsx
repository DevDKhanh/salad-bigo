import React from 'react';
import styles from './MainPage.module.scss';

interface props {
    children: React.ReactNode;
}

function MainPage({ children }: props) {
    return <div className={styles.main}>{children}</div>;
}

export default MainPage;
