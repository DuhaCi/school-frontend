import React from 'react'
import IQuest from '../interfaces/IQuest'
import QuestInput from './UI/QuestInput'
import QuestImage from './UI/QuestImage'
import styles from "../styles/Quests.module.css"
export default function QuestElement(props: IQuest) {
  return (
    <div className={styles.questBlock}>
        <div className={styles.questTheme}>
            {props.quest_id}. Тема {props.quest_header}
        </div>
        <div className={styles.questInfo}>
            {props.quest_info}
        </div>
        {
          props.quest_path != "None" ? <QuestImage quest_path={props.quest_path}/> : <div className={styles.NoneImage}> </div>
        }
        <div>
            Количество баллов: {props.quest_points}
        </div>
        <QuestInput quest_answer={props.quest_answer} quest_id={props.quest_id}/>
    </div>
  )
}
