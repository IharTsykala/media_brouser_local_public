import { VideoItemInterface } from "../../InterfacesEntity/form.interface"
import { ActionTypes } from "./video.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  arrayVideo: VideoItemInterface | null;
}

const initialState: State = {
  arrayVideo: null,
}

export const videoReducer = (
  state: State = initialState,
  action: Action<[]>
) => {
  switch (action.type) {
    case ActionTypes.SET_ARRAY_FORM:
      return {
        ...state,
        arrayVideo: action.payload,
      }
    default:
      return state
  }
}
