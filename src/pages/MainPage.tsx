import React from "react"
import Header from "../components/Header"
import styles from "../styles/MainPage.module.css"
import SectionList from "../components/SectionList"

function MainPage() {
    return (
        <>
            <div>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.text}>
                        Сайт для подготовки к Единому Государственному Экзамену по физике
                        <div className={styles.description}>
                        Все задачи для подготовки к экзамену по физике были собраны с сайта бланков заданий фипи.
                        </div>  
                    </div>
                </div>
                <SectionList/>
            </div>
        </>
    )
}

export default MainPage;