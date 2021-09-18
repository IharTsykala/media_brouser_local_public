import React from "react"
// @ts-ignore
import dragIcon from "../../assets/pictures/dragIcon.svg"
import ReactPlayer from 'react-player'
import { InterfaceContentCard } from "../../../services/interfacesAndTypes/common"

type SingleFileDataVideoComponentProps = {
  contentCard: InterfaceContentCard;
}

const SingleFileDataVideoComponent: React.FunctionComponent<SingleFileDataVideoComponentProps> = ({
    contentCard
}) => {
  return (
  <>
        <input type="checkbox" id="horns" name="horns"/>
        <ReactPlayer url={contentCard.link} width={"320px"}/>
        <p>{contentCard.name}</p>
        <img className={``} src={""} alt={"remove"}/>
        <img className={``} src={""} alt={"edit"}/>
    </>
  )
}
export default SingleFileDataVideoComponent