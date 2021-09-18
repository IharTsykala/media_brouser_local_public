import { InterfaceContentCard, Dispatch } from "../interfacesAndTypes/common"
import React from "react"

let id = 0

export class ContentCard implements InterfaceContentCard {
  id: number | string;
  name: string;
  src: string;
  description: string;
  checkbox: boolean;
  type: string;
  dimension: string;
  size: string;
  // @ts-ignore
  constructor(id, name, src, description, checkbox, type, dimension, size) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.id = id,
      this.name = name,
      this.src = src,
      this.description = description
    this.checkbox = checkbox
    this.type = type
    this.dimension = dimension
    this.size = size
  }
}

const getContentCards = (imgArr: string[]) =>
  imgArr.map((src: string) => new ContentCard(id++, "some name", src, "some description",
    false, "image/png", "1280 * 720 px", "128 kb"))

export default getContentCards

export const findIndex = (id: string | number, arrayContentCard: InterfaceContentCard[]) =>
  arrayContentCard.findIndex(contentCard=>contentCard.id === id)

export const findCard = (id: string | number, arrayContentCard: InterfaceContentCard[]) =>
  arrayContentCard.find((card: InterfaceContentCard)=> card.id === id)

export const getArrayBlobObjects = (arrayFiles:  File[]) => arrayFiles.map((file: {}) => URL.createObjectURL(file))

export const onUploadClick = (inputElement: React.MutableRefObject<HTMLInputElement>) => inputElement.current.click()

export const handlerUploadDocument = (e: React.ChangeEvent<HTMLInputElement>,
                                      setArrayContentCard: Dispatch<InterfaceContentCard[]>, typeArrayContentCard?: string) => {

  const arrayFiles = e?.target?.files?.[0]
    ? typeArrayContentCard === "single"
      ? [e.target.files[0]]
      : Array.from(e.target.files)
    : []
  const files = getArrayBlobObjects(arrayFiles)
  setArrayContentCard(getContentCards(files))
}

export const setValueCheckBox = (idCard: number | string, arrayContentCard: InterfaceContentCard[],
                                 setArrayContentCard: Dispatch<InterfaceContentCard[]>, statusHeaderForList: boolean, statusCommonCheckBox: boolean) =>
  setArrayContentCard(arrayContentCard.map((contentCard: InterfaceContentCard) =>
    statusHeaderForList? {...contentCard, checkbox: !statusCommonCheckBox}
      :contentCard.id === idCard
        ? {...contentCard, checkbox: !contentCard.checkbox}
        :contentCard
  ))

export const removeImgFromGallery = (arrayContentCard: InterfaceContentCard[],
                                     setArrayContentCard: Dispatch<InterfaceContentCard[]>, id: string | number | null) =>
  setArrayContentCard(arrayContentCard.filter(contentCard => id === "checkBox"
    ? !contentCard.checkbox: contentCard.id !== id))

export const handlerOnClickCheckBox = (statusHeaderForList: boolean, setStatusCommonCheckBox: Dispatch<boolean>,
                                       statusCommonCheckBox: boolean, idCard: number | string, arrayContentCard: InterfaceContentCard[],
                                       setArrayContentCard: Dispatch<InterfaceContentCard[]>) => {
  if (statusHeaderForList) {
    setStatusCommonCheckBox(!statusCommonCheckBox)
  }
  setValueCheckBox(idCard, arrayContentCard, setArrayContentCard, statusHeaderForList, statusCommonCheckBox)
}

export const handlerSetStatusDragAndDrop = (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, value: boolean,
                                            setStatusDragAndDrop: Dispatch<boolean>) => {
  e.stopPropagation()
  if (setStatusDragAndDrop) {
    setStatusDragAndDrop(value)
  }
}