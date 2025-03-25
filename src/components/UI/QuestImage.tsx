import React from 'react'
import styles from "./QuestImage.module.css"

export default function QuestImage(props: {quest_path: string}) {
  return (
    <div>
        <img className={styles.questImage} src={props.quest_path} />
    </div>
  )
}
