import { Action, InterfaceContentCard } from "../../../services/interfacesAndTypes/common"

export const ActionTypes = {
  GET_ARRAY_VIDEO: "[VIDEO] Get array video",
  SET_ARRAY_VIDEO: "[VIDEO] Set array video",
  REMOVE_CARD_BY_ID: "[VIDEO] Remove card by id",
  EDIT_CARD_BY_ID: "[VIDEO] Edit card by id",

  GET_FAILURE: "[getFailureAction] get failure action",
}

export const getArrayVideo = (): Action<never> => ({
  type: ActionTypes.GET_ARRAY_VIDEO
})

export const setArrayVideo = (arrayVideo: InterfaceContentCard[]): Action<InterfaceContentCard[]> => ({
  type: ActionTypes.SET_ARRAY_VIDEO,
  payload: arrayVideo,
})

export const removeCardById = (id: number | string): Action<number | string> => ({
  type: ActionTypes.REMOVE_CARD_BY_ID,
  payload: id,
})

export const editCardById = (id: number | string): Action<number | string> => ({
  type: ActionTypes.EDIT_CARD_BY_ID,
  payload: id,
})

export const getFailureAction = (error?: string): Action<string> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
