import React, { useState } from "react";
import styles from "../styles/header.module.css"
import IHeadButton from "../interfaces/IHeadButtons";
import HeaderButton from "./UI/HeaderButton";

function Header() {
    const [names, setNames] = useState<IHeadButton[]>([
        {name: "Практика", link: "/practice"},
        {name: "Формулы", link: "/formula"}
    ])
    return (
        <>
            <header className={styles.headerStyle}>
                {names.map(value => <HeaderButton key={value.link} name={value.name} link={value.link}/>)}
            </header>
        </>
    );
}

export default Header;