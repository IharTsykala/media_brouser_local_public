import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes, getAuthVideo, getFailureAction, setArrayVideo } from "./video.actions"
import videoService from "../../../services/api/videoService";
const stateWord = "helloUser"

function* getAuthVideoSaga(action: any) {
  try {
    if(action.payload.state !== stateWord) {
      return
    }
    const response = yield videoService.getNewAccessTokenService(action.payload.code)
  } catch (e) {
    console.log(e)
  }
}

function* getArrayVideoSaga() {
  try {
    const response = yield videoService.getArrayVideoService()
    yield put(setArrayVideo(response.data))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* removeCardByIdSaga(action: any) {
  try {
    const response = yield videoService.removeCardByIdService(action.payload)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* editCardByIdSaga(action: any) {
  try {
    const response = yield videoService.getNewAccessTokenService(action.payload)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* videoSaga() {
  yield takeEvery(ActionTypes.GET_AUTH_VIDEO, getAuthVideoSaga)
  yield takeEvery(ActionTypes.GET_ARRAY_VIDEO, getArrayVideoSaga)
  yield takeEvery(ActionTypes.REMOVE_CARD_BY_ID, removeCardByIdSaga)
  yield takeEvery(ActionTypes.EDIT_CARD_BY_ID, editCardByIdSaga)
}
