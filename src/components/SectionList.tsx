import React, { useEffect, useState } from "react";
import getTheme from "../services/getTheoryList.service";
import SectionElement from "./SectionElement";
import ISection from "../interfaces/ISection";
import styles from "../styles/Section.module.css"
import { Link } from "react-router-dom";
import getSections from "../services/getTheoryList.service";


function SectionList() {

    useEffect(() => {
        getSections().then(value => setElements(elem => elem = value))
    }, [])
    const [elements, setElements] = useState<ISection[]>([]);

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.text}>
                    Основные разделы физики
            </div>
                <div className={styles.sectionList}>
                    {
                        elements.map(value => <Link key={value.id} className={styles.link} to={`/section/${value.header}/${value.id}`}>
                        <SectionElement 
                        header={value.header}
                        descriptionSection={value.descriptionSection}
                        id={value.id}/></Link>
                        )
                    }
                </div>
        </div>
    )
}

export default SectionList;