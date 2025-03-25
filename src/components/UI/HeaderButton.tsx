import React from "react";
import IHeadButton from "../../interfaces/IHeadButtons";
import styles from "./HeaderButton.module.css"
import { Link } from "react-router-dom";

function HeaderButton(props: IHeadButton) {
    return (
        <>
            <Link to={props.link} className={styles.HeaderButton}>
                {props.name}
            </Link>
        </>
    )
}

export default HeaderButton;