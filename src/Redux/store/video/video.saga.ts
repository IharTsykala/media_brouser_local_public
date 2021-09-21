import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes, getFailureAction, setArrayVideo } from "./video.actions"
import videoService from "../../../services/api/videoService";

function* getArrayVideoSaga() {
  try {
    const response = yield videoService.getArrayVideoService()
    yield put(setArrayVideo(response.data))
    console.log("getArray", response)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* removeCardByIdSaga(action: any) {
  try {
    const responseAccessToken = yield videoService.getNewAccessTokenService(action.payload)
    const response = yield videoService.removeCardByIdService(action.payload, responseAccessToken.access_token)

    console.log("remove",response)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* editCardByIdSaga(action: any) {
  try {
    const responseAccessToken = yield videoService.getNewAccessTokenService(action.payload)
    const response = yield videoService.editCardByIdService(action.payload, responseAccessToken.access_token)

    console.log("edit",response)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* videoSaga() {
  yield takeEvery(ActionTypes.GET_ARRAY_VIDEO, getArrayVideoSaga)
  yield takeEvery(ActionTypes.REMOVE_CARD_BY_ID, removeCardByIdSaga)
  yield takeEvery(ActionTypes.EDIT_CARD_BY_ID, editCardByIdSaga)
}
