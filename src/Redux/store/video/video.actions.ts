import { Action, InterfaceContentCard } from "../../../services/interfacesAndTypes/common"

export const ActionTypes = {
  GET_ARRAY_FORM: "[FORM] Set form",
  SET_ARRAY_FORM: "[PHOTO] Set form",

  GET_FAILURE: "[getFailureAction] get failure action",
}

export const getArrayVideo = (): Action<never> => ({
  type: ActionTypes.GET_ARRAY_FORM
})

export const setArrayVideo = (arrayVideo: InterfaceContentCard[]): Action<InterfaceContentCard[]> => ({
  type: ActionTypes.SET_ARRAY_FORM,
  payload: arrayVideo,
})

export const getFailureAction = (error?: string): Action<string> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
