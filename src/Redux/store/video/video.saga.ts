import { put, takeEvery } from "redux-saga/effects"
import {ActionTypes, getFailureAction, setArrayVideo} from "./video.actions"
import videoService from "../../../services/api/videoService";

function* getArrayVideoSaga() {
  try {
    // const responseNewAccessToken = yield videoService.getNewAccessToken()
    const response = yield videoService.getArrayVideoService()
    yield put(setArrayVideo(response.data))
    console.log(response)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* videoSaga() {
  yield takeEvery(ActionTypes.GET_ARRAY_FORM, getArrayVideoSaga)
}
