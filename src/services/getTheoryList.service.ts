import axios from "axios";

const getSections = async() => {
    try {
        const response = await axios.get("http://localhost:5000/api/sections");
        const data = response.data;
        return data;
    } catch (error: any) {
        console.log(error.message)
    }

}

export default getSections;