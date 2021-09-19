import { ActionTypes } from "./video.actions"
import { InterfaceContentCard, Action } from "../../../services/interfacesAndTypes/common"

export interface State {
  arrayVideo: InterfaceContentCard | null;
}

const initialState: State = {
  arrayVideo: null,
}

export const videoReducer = (state: State = initialState, action: Action<[]>) => {
  switch (action.type) {
  case ActionTypes.SET_ARRAY_VIDEO:
    return {
      ...state,
      arrayVideo: action.payload,
    }
  default:
    return state
  }
}
