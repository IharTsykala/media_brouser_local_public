import React from "react"
import {Box, Checkbox, Text} from "@sanity/ui"
// @ts-ignore
import dragIcon from "../../../assets/pictures/dragIcon.svg"
import { InterfaceContentCard, Dispatch } from "../../../services/interfacesAndTypes/common"
import { handlerSetStatusDragAndDrop, handlerOnClickCheckBox } from "../../../services/functions/img"


type SingleFileDataImgComponentProps = {
  contentCard: InterfaceContentCard | any;
  setArrayContentCard: Dispatch<InterfaceContentCard[]>;
  arrayContentCard: InterfaceContentCard[];
  setStatusCommonCheckBox: Dispatch<boolean>;
  statusCommonCheckBox: boolean;
  setStatusDragAndDrop?: Dispatch<boolean>;
}

const SingleFileDataImgComponent: React.FunctionComponent<SingleFileDataImgComponentProps> = ({
  contentCard,
  setArrayContentCard,
  arrayContentCard,
  setStatusCommonCheckBox,
  statusCommonCheckBox,
  setStatusDragAndDrop
  }) => {
  const statusHeaderForList = contentCard.id === "header for list files"

  return (
      <>
          <Box className={`single-file-data__drag-container`}>
            <img className={`single-file-data__drag-icon`} src={dragIcon} alt={"drag icon"}
                 onMouseDown={(e) =>
                   setStatusDragAndDrop && handlerSetStatusDragAndDrop(e, true, setStatusDragAndDrop)}
            />
          </Box>
          <Box className={`single-file-data__check-box-container`}>
            <Checkbox className={`single-file-data__check-box-item`} checked={contentCard.checkbox}
                      onChange={() => handlerOnClickCheckBox(statusHeaderForList, setStatusCommonCheckBox, statusCommonCheckBox,
                        contentCard.id, arrayContentCard, setArrayContentCard)}/>
          </Box>
          <Box className={`single-file-data__img-container`}>
            {statusHeaderForList ?
              <Text className={`single-file-data__img-header-text`}>{contentCard.src}</Text>
              : <img className={`single-file-data__img-item`} src={contentCard.src} alt={contentCard.name}/>}
          </Box>
          <Box className={`single-file-data__name-container`}>
            <Text className={`single-file-data__name-text`}>{contentCard.name}</Text>
          </Box>
          <Box className={`single-file-data__size-container`}>
            <Text className={`single-file-data__size-text`}>{contentCard.size}</Text>
          </Box>
          <Box className={`single-file-data__type-container`}>
            <Text className={`single-file-data__type-text`}>{contentCard.type}</Text>
          </Box>
          <Box className={`single-file-data__dimension-container`}>
            <Text className={`single-file-data__dimension-text`}>{contentCard.dimension}</Text>
          </Box>
          <Box className={`single-file-data__description-container`}>
            <Text className={`single-file-data__description-text`}>{contentCard.description}</Text>
          </Box>
      </>
  )
}
export default SingleFileDataImgComponent