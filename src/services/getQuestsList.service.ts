import axios from "axios";

const getQuests = async(quest_header: string) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/quests/${quest_header}`);
        const data = response.data;
        return data;
    } catch (error: any) {
        console.log(error.message)
    }

}

export default getQuests;