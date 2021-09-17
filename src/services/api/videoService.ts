const axios = require("axios")

const host = process.env.REACT_APP_HOST ||
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm'
    // "https://api.sproutvideo.com.herokuapp.com/v1/videos"

export default class videoService {

    static getArrayVideoService = async () => {
        const response = await axios.get(
            `${host}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'SproutVideo-Api-Key': 'dac3333cba924e94f891304e38f40536',
                    // 'Accept': '*/*',
                    // 'Access-Control-Request-Headers': 'sproutvideo-api-key'
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': '2f37323723msh3e0b6c81df26c04p13a245jsn38a9cd6cb155'
                },
            }
        )
        console.log(response)
        return response.data
    }
}