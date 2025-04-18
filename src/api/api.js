import axios from "axios";

export const fetchUserInfo = async () => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/information/users/info/")
        return response.data
    } catch (err) {
        throw err.response || err
    }
}

export default fetchUserInfo;
