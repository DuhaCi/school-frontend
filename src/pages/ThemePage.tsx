import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/Themes.module.css"

function ThemePage() {
    const {state} = useLocation();
    return (
        <div className={styles.InfoContainer}>
            <div className={styles.InfoDescription}>
                {state.desc}
            </div>
            <div className={styles.Info}>
                {state.info}
            </div>
        </div>
    )
}

export default ThemePage;