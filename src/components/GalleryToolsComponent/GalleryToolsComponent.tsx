import React from "react"
import { Grid, Box, Button, Text } from "@sanity/ui"
// @ts-ignore
import bigViewImg from "../../assets/pictures/bigViewImg.svg"
// @ts-ignore
import listViewImg from "../../assets/pictures/listViewImg.svg"
import { InterfaceContentCard, Dispatch } from "../../services/interfacesAndTypes/common"
import { removeImgFromGallery, setValueCheckBox } from "../../services/functions/img"

type GalleryToolsComponentProps = {
  galleryArrayContentCard: InterfaceContentCard[],
  setGalleryArrayContentCard: Dispatch<InterfaceContentCard[]>,
  statusViewGallery: string,
  setStatusViewGallery: Dispatch<string>,
  setStatusDragAndDrop: Dispatch<boolean>,
}

const GalleryToolsComponent: React.FunctionComponent<GalleryToolsComponentProps> = ({
  galleryArrayContentCard,
  setGalleryArrayContentCard,
  statusViewGallery,
  setStatusViewGallery,
  setStatusDragAndDrop,
}) => {
  const borderIconViewGallery = "1px solid #1870F5"

  const showClearCheckBoxBlock = (galleryArrayContentCard: InterfaceContentCard[]) =>
    galleryArrayContentCard.find((contentCard: InterfaceContentCard) => contentCard.checkbox)

  const handlerOnClickViewTools = (
    nameScreen: string,
    nextStatusDragAndDrop: boolean,
    setStatusViewGallery: Dispatch<string>,
    setStatusDragAndDrop: Dispatch<boolean>
  ) => {
    setStatusViewGallery(nameScreen)
    setStatusDragAndDrop(nextStatusDragAndDrop)
  }

  return (
    <Box className={"container-gallery-tools"}>
      <Grid className={"gallery-tools__view-tools-container"} columns={[2]} gap={2} style={{ width: "10%" }}>
        <Box
          className={`view-tools-container__item-container left`}
          onClick={() => handlerOnClickViewTools("bigImg", true, setStatusViewGallery, setStatusDragAndDrop)}
          style={{ border: statusViewGallery === "bigImg" ? borderIconViewGallery : "" }}
        >
          <img className={`view-tools__icon`} src={bigViewImg} alt={"big img icon"} />
        </Box>
        <Box
          className={`view-tools-container__item-container right`}
          onClick={() => handlerOnClickViewTools("listImg", false, setStatusViewGallery, setStatusDragAndDrop)}
          style={{ border: statusViewGallery === "listImg" ? borderIconViewGallery : "" }}
        >
          <img className={`view-tools-container__icon`} src={listViewImg} alt={"list img icon"} />
        </Box>
      </Grid>
      {showClearCheckBoxBlock(galleryArrayContentCard) && (
        <Box className={"gallery-tools__container-clear-checkBox"}>
          <Text
            className={"gallery-tools__text-clear-checkBox"}
            onClick={() =>
              setValueCheckBox("deselect all checkbox", galleryArrayContentCard, setGalleryArrayContentCard, true, true)
            }
          >
            > Deselect all
          </Text>
        </Box>
      )}
      <Grid className={"gallery-tools__buttons-container"} columns={[2]} gap={2} style={{ width: "50%" }}>
        <Button className={`gallery-tools__button left`}>Upload new file</Button>
        <Button className={`gallery-tools__button right`}>From Media Area</Button>
      </Grid>
      {showClearCheckBoxBlock(galleryArrayContentCard) && (
        <Box
          className={"gallery-tools__container-remove-files"}
          onClick={() => removeImgFromGallery(galleryArrayContentCard, setGalleryArrayContentCard, "checkBox")}
        >
          <img className={`gallery-tools__remove-files-icon`} src={listViewImg} alt={"list img icon"} />
          <Text className={`gallery-tools__remove-files-text`}>Delete Selection</Text>
        </Box>
      )}
    </Box>
  )
}

export default GalleryToolsComponent
