import React from "react"
import {Box, Checkbox, Text, Grid} from "@sanity/ui"
import {InterfaceContentCard, Dispatch, setValueCheckBox} from "../ContainerMediaComponent/contentCard";
// @ts-ignore
import dragIcon from "../../assets/pictures/dragIcon.svg"

type SingleFileDataComponentProps = {
    contentCard: InterfaceContentCard | any;
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

    const statusHeaderForList = contentCard.id === "header for list files"

    const handlerOnClickCheckBox = (statusHeaderForList: boolean, setStatusCommonCheckBox: Dispatch<boolean>,
    statusCommonCheckBox: boolean, idCard: number | string, arrayContentCard: InterfaceContentCard[],
    setArrayContentCard: Dispatch<InterfaceContentCard[]>) => {
        if (statusHeaderForList) {
            setStatusCommonCheckBox(!statusCommonCheckBox)
        }
        setValueCheckBox(contentCard.id, arrayContentCard, setArrayContentCard, statusHeaderForList, statusCommonCheckBox)
    }

    const handlerSetStatusDragAndDrop = (e: React.MouseEvent<HTMLImageElement>, value: boolean) => {
        e.stopPropagation()
        if (setStatusDragAndDrop) {
            setStatusDragAndDrop(value)
        }
    }

  console.log(1)

    return (
        <>
            <Grid className={`single-file-data__container`} columns={[8]}
            onMouseDown={(e) => setStatusDragAndDrop && handlerSetStatusDragAndDrop(e, false)}>
              {namePage === "img-gallery" &&  <>
                <Box className={`single-file-data__drag-container`}>
                    <img className={`single-file-data__drag-icon`} src={dragIcon} alt={"drag icon"}
                         onMouseDown={(e) => setStatusDragAndDrop && handlerSetStatusDragAndDrop(e, true)}
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
                </>}
              {namePage === "video-list" && (<video width="320" height="240" controls>
                <source src={contentCard.PlaceName} type=""/>
              </video>)
              }
            </Grid>
        </>
    )
}
export default SingleFileDataComponent