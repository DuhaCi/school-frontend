import React from "react";
import ITheme from "../interfaces/ITheme";
import styles from "../styles/Themes.module.css"
import { Link, useParams } from "react-router-dom";

function ThemeElement(props: ITheme) {
    const {header} = useParams();
    return (
        <Link className={styles.link} to={props.information} state={{info: props.information, desc: props.description}}>
            <div className={styles.ThemeBlock}>
                {props.id}. {props.description}
            </div>
        </Link>
    )
}

export default ThemeElement;