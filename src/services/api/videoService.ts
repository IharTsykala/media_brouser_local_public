import { removeCardById } from "../../Redux/store/video/video.actions"

const axios = require("axios")
const host = process.env.REACT_APP_HOST || "https://api.vimeo.com"

const userId = "151396534"
const accessToken = "44c2627337c4ddb92f55eccd42e82229"

export default class videoService {

  static getNewAccessToken = async () => {
    const newAccessToken = await axios.post(
      `${host}/oauth/authorize/client`,
      {
        "grant_type": "client_credentials",
        "scope": "private purchased create edit delete interact upload promo_codes video_files scim public"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${accessToken}`,
          'Accept': 'application/vnd.vimeo.*+json;version=3.4',
        },
      }
    )
    console.log(newAccessToken.data)
    // const redirectUser = await axios.get(
    //   `${host}/oauth/authorize?response_type=code&client_id=${newAccessToken.data.access_token}&redirect_uri=${host}${newAccessToken.data.app.uri}&state="helloUser"&scope=${newAccessToken.data.scope}`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // 'Authorization': `bearer ${accessToken}`,
    //       'Accept': 'application/vnd.vimeo.*+json;version=3.4',
    //     },
    //   }
    // )
    //
    // console.log(redirectUser.data)
    return newAccessToken.data
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

    static removeCardByIdService = async (id: string | number, newAccessToken: string) => {

      const responseRemove = await axios.delete(
        `${host}${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${newAccessToken}`,
            'Accept': 'application/vnd.vimeo.*+json;version=3.4',
          },
        }
      )
      console.log(responseRemove)
      // return response.data
    }

      static editCardByIdService = async (id: string | number, newAccessToken: string) => {
        const response = await axios.patch(
          `${host}${id}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `bearer ${newAccessToken}`,
              'Accept': 'application/vnd.vimeo.*+json;version=3.4',
            },
          }
        )
        console.log(response)
        return response.data
      }
}
