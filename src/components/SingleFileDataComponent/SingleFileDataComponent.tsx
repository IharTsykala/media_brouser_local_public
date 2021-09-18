import React from "react"
import {Grid} from "@sanity/ui"
// @ts-ignore
import dragIcon from "../../assets/pictures/dragIcon.svg"
import SingleFileDataImgComponent from "./SingleFileDataImgComponent/SingleFileDataImgComponent"
import SingleFileDataVideoComponent from "./SingleFileDataVideoComponent/SingleFileDataVideoComponent"
import { InterfaceContentCard, Dispatch } from "../../services/interfacesAndTypes/common"
import { handlerSetStatusDragAndDrop } from "../../services/functions/img"

type SingleFileDataComponentProps = {
    contentCard: InterfaceContentCard;
    setArrayContentCard: Dispatch<InterfaceContentCard[]>;
    arrayContentCard: InterfaceContentCard[];
    setStatusCommonCheckBox: Dispatch<boolean>;
    statusCommonCheckBox: boolean;
    setStatusDragAndDrop?: Dispatch<boolean>;
    namePage: string;
}

const SingleFileDataComponent: React.FunctionComponent<SingleFileDataComponentProps> = ({
      contentCard,
      setArrayContentCard,
      arrayContentCard,
      setStatusCommonCheckBox,
      statusCommonCheckBox,
      setStatusDragAndDrop,
      namePage,
    }) => {

    return (
        <>
            <Grid className={`single-file-data__container`} columns={[8]}
            onMouseDown={(e) =>
              setStatusDragAndDrop && handlerSetStatusDragAndDrop(e, false, setStatusDragAndDrop)}>
              {namePage === "img-gallery" &&  <SingleFileDataImgComponent
                contentCard={contentCard}
                setArrayContentCard={setArrayContentCard}
                arrayContentCard={arrayContentCard}
                setStatusCommonCheckBox={setStatusCommonCheckBox}
                statusCommonCheckBox={statusCommonCheckBox}
                setStatusDragAndDrop={setStatusDragAndDrop}
              />}
              {namePage === "video-list" && <SingleFileDataVideoComponent contentCard={contentCard}/>
              }
            </Grid>
        </>
    )
}
export default SingleFileDataComponent