import axios from "axios";

const getThemes = async(id_section: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/themes/${id_section}`);
        const data = response.data;
        return data;
    } catch (error: any) {
        console.log(error.message)
    }

}

export default getThemes;