const axios = require("axios")
const hostApp = process.env.REACT_APP_HOST || "http://localhost:3000/"
const hostVideo = process.env.REACT_VIDEO_HOST || "https://api.vimeo.com"
const currentRoute = "video/list/"

const userId = "151396534"
const accessToken = "44c2627337c4ddb92f55eccd42e82229"
const clientIdentifier = "ad8e3f1947b97a05ec3e6c40ff2daee1c367901c"
const stateWord = "helloUser"

export default class videoService {
  static getRedirectToAllowPageService = () => {
    window.location.href = `${hostVideo}/oauth/authorize?response_type=code&client_id=${clientIdentifier}&redirect_uri=${hostApp}&state=${stateWord}&scope=private`;
  }

  static  getNewAccessTokenService = async (code: string) => {
    return await axios.post(
      `${hostVideo}/oauth/access_token`,
      {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: hostApp,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${accessToken}`,
          'Accept': 'application/vnd.vimeo.*+json;version=3.4',
        },
      }
    )
  }

  static getRedirectToVideoPageService = async (code: string, state: string) => {
    window.location.href = `${hostVideo}${currentRoute}`
  }

  static getArrayVideoService = async () => {
    const response = await axios.get(`${hostVideo}/users/${userId}/videos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
    })
    return response.data
  }

  static removeCardByIdService = async (id: string | number) => {
    const response = await axios.delete(`${hostVideo}${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
    })
    return response.data
  }

  static editCardByIdService = async (id: string | number, newAccessToken: string) => {
    const response = await axios.patch(
      `${hostVideo}${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${newAccessToken}`,
          Accept: "application/vnd.vimeo.*+json;version=3.4",
        },
      }
    )
    return response.data
  }
}
