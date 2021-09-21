import React from "react"
import ReactPlayer from "react-player"
import { InterfaceContentCard } from "../../../services/interfacesAndTypes/common"
import { useDispatch } from "react-redux"
import { editCardById, removeCardById } from "../../../Redux/store/video/video.actions"

type SingleFileDataVideoComponentProps = {
  contentCard: InterfaceContentCard,
}

const SingleFileDataVideoComponent: React.FunctionComponent<SingleFileDataVideoComponentProps> =
  ({ contentCard }) => {

    const dispatch = useDispatch()
    const handlerRemoveCard = (uriVideo: string | number | undefined) => uriVideo && dispatch(removeCardById(uriVideo))
    const handlerEditCard = (uriVideo: string | number | undefined) => uriVideo && dispatch(editCardById(uriVideo))

    return (
      <>
        <input type="checkbox" id="horns" name="horns" />
        <ReactPlayer url={contentCard.link} width={"320px"} />
        <p>{contentCard.name}</p>
        <img className={``} src={""} alt={"remove"} onClick={()=>handlerRemoveCard(contentCard.uri)}/>
        <img className={``} src={""} alt={"edit"} onClick={()=>handlerEditCard(contentCard.uri)}/>
      </>
    )
  }
export default SingleFileDataVideoComponent
