import { combineReducers } from "redux"
import { videoReducer } from "./store/video/video.reducer"

export default combineReducers({
  video: videoReducer,
})
