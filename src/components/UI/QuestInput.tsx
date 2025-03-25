import React, { useState } from 'react'
import styles from "./QuestInput.module.css"

export default function QuestInput(props: {quest_answer: string, quest_id: number}) {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(value => value = event.target.value)
    }
    const onClick = () => {
        if (currentValue != props.quest_answer) {
            localStorage.setItem(`isRight${props.quest_id}`, "false")
        } else {
            localStorage.setItem(`isRight${props.quest_id}`, "true")
        }
    }
    const [currentValue, setCurrentValue] = useState<string>();
    return (
    <div className={styles.questInput}>
        <div>
            <input className={styles.inputArea} onChange={onChange}></input>
            <button className={styles.inputButton} onClick={onClick}>Проверить</button>
        </div>
        {
                localStorage.getItem(`isRight${props.quest_id}`) == "true" ? 
                <div className={styles.inputAnswer}>Выполнено</div>
                     : 
                <div className={styles.inputAnswer}>Не выполнено</div>
        }
    </div>
  )
}
