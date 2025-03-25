import { useEffect, useState } from "react";
import getThemes from "../services/getThemesList.service";
import ITheme from "../interfaces/ITheme";
import { useParams } from "react-router-dom";
import styles from "../styles/Themes.module.css"
import ThemeElement from "../components/ThemeElement";

function ThemesPage() {

    const {id, header} = useParams()
    useEffect(() => {
        getThemes(Number(id)).then(value => setThemes(elem => elem = value))
    }, [])

    const [themes, setThemes] = useState<ITheme[]>([]);
    return  (
        <>
        <div className={styles.Header}>
            {header}
        </div>
        <div className={styles.ThemeList}>
            {themes.map(value => <ThemeElement
            id={value.id}
            description={value.description}
            information={value.information}
            sections_id={value.sections_id}
            />)}
        </div>
        </>
    )
}

export default ThemesPage;