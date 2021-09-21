import { removeCardById } from "../../Redux/store/video/video.actions"

const axios = require("axios")
const hostApp = process.env.REACT_APP_HOST || "http://localhost:3000/"
const hostVideo = process.env.REACT_VIDEO_HOST || "https://api.vimeo.com"
const currentRoute = "video/list/"

const userId = "151396534"
const accessToken = "44c2627337c4ddb92f55eccd42e82229"
const clientIdentifier = "ad8e3f1947b97a05ec3e6c40ff2daee1c367901c"
const stateWord = "helloUser"

export default class videoService {
  static getRedirectToAllowPageService = async () => {
    window.location.href = `${hostApp}/oauth/authorize?response_type=code&client_id=${clientIdentifier}&redirect_uri=${hostApp}&state=${stateWord}&scope=private`
  }

  static  getNewAccessTokenService = async (code: string, state: string) => {
    if (state === stateWord) {
      const response = await axios.post(
        `${hostVideo}/oauth/access_token`,
        {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${accessToken}`,
            "Accept": "application/vnd.vimeo.*+json;version=3.4",
          },
        }
      )
      window.location.href = `${hostVideo}${currentRoute}`
    }
  }

  static getRedirectToVideoPageService = async (code: string, state: string) => {
    window.location.href = `${hostVideo}${currentRoute}`
  }

  // static getNewAccessTokenService = async (uriVideo: string) => {
  // const newAccessToken = await axios.post(
  //   `${host}/oauth/authorize/client`,
  //   {
  //     "grant_type": "client_credentials",
  //     "scope": "private purchased create edit delete interact upload promo_codes video_files scim public"
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `bearer ${accessToken}`,
  //       'Accept': 'application/vnd.vimeo.*+json;version=3.4',
  //     },
  //   }
  // )
  // console.log(1, newAccessToken.data)
  // console.log(2, uriVideo)
  // window.location.href = `${hostApp}/oauth/authorize?response_type=code&client_id=${clientIdentifier}&redirect_uri=http://localhost:3000/&state="helloUser"&scope=private`;
  // const redirectUser = await axios.get(
  //   `${host}/oauth/authorize?response_type=code&client_id=${clientIdentifier}&redirect_uri=${uriVideo}&state="helloUser"&scope=${newAccessToken.data.scope}`,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'Authorization': `bearer ${accessToken}`,
  //       'Accept': 'application/vnd.vimeo.*+json;version=3.4',
  //     },
  //   }
  // )
  //
  // console.log(redirectUser)
  // return newAccessToken.data
  // }

  static getArrayVideoService = async () => {
    const response = await axios.get(`${hostVideo}/users/${userId}/videos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
    })
    console.log(response)
    return response.data
  }

  static removeCardByIdService = async (id: string | number, newAccessToken: string) => {
    const responseRemove = await axios.delete(`${hostVideo}${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${newAccessToken}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
    })
    console.log(responseRemove)
    // return response.data
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
    console.log(response)
    return response.data
  }
}
