import axios from "axios";
import config from "./Config";

export const searchTrack = async (query,accessToken) => {
    const requestOptions = {
        headers:{
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.get(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${query}`,requestOptions);

    return response.data;
}