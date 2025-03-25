import ISection from "../interfaces/ISection";
import styles from "../styles/Section.module.css"


function SectionElement(props: ISection) {
    return (
        <div className={styles.sectionBlock}>
            <div>
                <div className={styles.sectionName}>
                    {props.id}. {props.header}
                </div>
                <div className={styles.sectionDescription}>
                    {props.descriptionSection}
                </div>
            </div>
        </div>
    )
}
export default SectionElement;

{/* <Link key={value.id} className={styles.link} to={`/section/${value.header}/${value.id}`}></Link> */}