import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import VideoList from "../../Pages/VideoList/VideoList"
import ImgSinglePage from "../../Pages/ImgSinglePage/ImgSinglePage"
import ImgGalleryPage from "../../Pages/ImgGalleryPage/ImgGalleryPage"
// import { getCode, getState } from "../../services/functions/common"
// import { getAuthVideo } from "../../Redux/store/video/video.actions"
// import { useDispatch } from "react-redux"

const ContainerSwitchComponent: React.FC = () => {

  // const dispatch = useDispatch()
  //
  // useEffect(()=> {
  //   console.log(1)
  //   if(getCode && getState) {
  //     console.log(0)
  //     dispatch(getAuthVideo(getCode, getState))
  //   }
  // },[getCode, getState])

  return  <Switch>
    <Route component={VideoList} path="/video/list/" exact />
    <Route component={ImgSinglePage} path="/img/single/" exact />
    <Route component={ImgGalleryPage} path="/img/gallery/" exact />
  </Switch>
}

export default ContainerSwitchComponent
