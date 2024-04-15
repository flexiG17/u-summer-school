import React from 'react';
import styles from './MainPage.module.scss';
import MainComponent from "../../components/Main/MainComponent";


const MainPage = () => {
    return (
        <section className={styles.grid}>
            <MainComponent/>
        </section>
    )
}

export default MainPage