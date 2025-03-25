import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getQuests from '../services/getQuestsList.service'
import IQuest from '../interfaces/IQuest'
import QuestElement from '../components/QuestElement'
import styles from "../styles/Quests.module.css"

export const QuestsPage = () => {
    const {header} = useParams()
    useEffect(() => {
        getQuests(String(header)).then(value => setQuestsList(quests => quests = value))
    })
    const [QuestsList, setQuestsList] = useState<IQuest[]>()
    return (
        <div>
            <div className={styles.questContainer}>
                {
                    QuestsList?.map(value => <QuestElement
                    quest_id={value.quest_id}
                    quest_answer={value.quest_answer}
                    quest_header={value.quest_header}
                    quest_info={value.quest_info}
                    quest_path={value.quest_path}
                    quest_points={value.quest_points}
                    />)
                }
            </div>
        </div>
    )
}
