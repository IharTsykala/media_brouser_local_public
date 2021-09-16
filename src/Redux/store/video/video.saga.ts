import { put, takeEvery } from "redux-saga/effects"
import {ActionTypes, getArrayVideo, getFailureAction, setArrayVideo} from "./video.actions"
import videoService from "../../../services/api/videoService";

function* getArrayVideoSaga() {
  try {
    const response = yield videoService.getArrayVideoService()
    yield put(setArrayVideo(response))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* videoSaga() {
  yield takeEvery(ActionTypes.GET_ARRAY_FORM, getArrayVideoSaga)
}
