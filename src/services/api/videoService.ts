const axios = require("axios")

const host = process.env.REACT_APP_HOST || "https://api.vimeo.com"

const clientIdentifier = "ad8e3f1947b97a05ec3e6c40ff2daee1c367901c"
const userId = "151396534"
const accessToken = "6b972ed6f553cac9c3c5cef2eb3fbe00"

export default class videoService {

  static getNewAccessToken = async () => {
    const response = await axios.post(
      `${host}/oauth/authorize/client`,
      {
        "grant_type": "client_credentials",
        "scope": "public"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${accessToken}`,
          'Accept': 'application/vnd.vimeo.*+json;version=3.4',
        },
      }
    )

    return response.data
  }

    static getArrayVideoService = async () => {
        const response = await axios.get(
            `${host}/users/${userId}/videos`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${accessToken}`,
                    'Accept': 'application/vnd.vimeo.*+json;version=3.4',
                },
            }
        )
        console.log(response)
        return response.data
    }
}