import React, {useState, useCallback, useEffect} from "react"
import ContainerGalleryComponent from '../ContainerGalleryComponent/ContainerGalleryComponent'
import ContainerSingleImgComponent from "../ContainerSingleImgComponent/ContainerSingleImgComponent"
import { studioTheme, ThemeProvider, Grid} from '@sanity/ui'
// @ts-ignore
import examplePic from "../../assets/pictures/examplePic.png";
// @ts-ignore
import pict2 from "../../assets/pictures/pict2.png";
// @ts-ignore
import pict3 from "../../assets/pictures/pict3.png";
// @ts-ignore
import pict4 from "../../assets/pictures/pict4.png";
import update from 'immutability-helper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {useDispatch} from "react-redux";
import {getArrayVideo} from "../../Redux/store/video/video.actions";
import getContentCards, { getArrayBlobObjects, onUploadClick } from "../../services/functions/img"
import { InterfaceContentCard, Dispatch } from "../../services/interfacesAndTypes/common";

const singleImgArrAssets: [string] | [] = [examplePic]
const galleryImgArrAssets: string[] | [] =
    [examplePic, pict2, pict3,
        pict4, examplePic, examplePic,
    examplePic, examplePic, examplePic]

type ContainerImgComponentProps = {
    namePage: string;
}

const ContainerMediaComponent: React.FunctionComponent<ContainerImgComponentProps> = ({namePage}) => {
    const [singleArrayContentCard, setSingleArrayContentCard] = useState(getContentCards(singleImgArrAssets))
    const [galleryArrayContentCard, setGalleryArrayContentCard] = useState(getContentCards(galleryImgArrAssets))

    const dispatch = useDispatch();

    useEffect(()=> {
        if(namePage === "video-list") {
            dispatch(getArrayVideo())
        }
    }, [])

    // for drag and drop in gallery without upload
    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number,
         arrayContentCard: InterfaceContentCard[], setArrayContentCard: Dispatch<InterfaceContentCard[]>) => {
            const dragCard = arrayContentCard[dragIndex]

            setArrayContentCard(
                update(arrayContentCard, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [singleArrayContentCard, galleryArrayContentCard],
    )

    // for drag and drop upload
    const handleUploadFileDrop = useCallback(
        (inputTargetFiles, setArrayContentCard: Dispatch<InterfaceContentCard[]>) => {
            if (inputTargetFiles?.length) {
                const files = getArrayBlobObjects(inputTargetFiles)
                setArrayContentCard(getContentCards(files))
            }
        },
        [singleArrayContentCard, galleryArrayContentCard],
    )

    return (
        <ThemeProvider theme={studioTheme}>
            {(namePage === "img-single" || namePage === "img-gallery") &&
            <DndProvider backend={HTML5Backend}>
                <Grid className={"container-img"}>
                    {namePage === "img-single" && <ContainerSingleImgComponent
                       singleArrayContentCard={singleArrayContentCard}
                       setSingleArrayContentCard={setSingleArrayContentCard}
                       onDrop={handleUploadFileDrop}
                       onUploadClick={onUploadClick}
                       onSelectClick={()=>{}}
                   />}
                    {namePage === "img-gallery" && <ContainerGalleryComponent
                        galleryArrayContentCard={galleryArrayContentCard}
                        setGalleryArrayContentCard={setGalleryArrayContentCard}
                        moveCard={moveCard}
                        onDrop={handleUploadFileDrop}
                        onUploadClick={onUploadClick}
                        onSelectClick={()=>{}}
                        statusViewGalleryProp={"bigImg"}
                        namePage={namePage}
                    />}
                </Grid>
        </DndProvider>}
            {namePage === "video-list" && <ContainerGalleryComponent
                galleryArrayContentCard={galleryArrayContentCard}
                setGalleryArrayContentCard={setGalleryArrayContentCard}
                moveCard={moveCard}
                onDrop={handleUploadFileDrop}
                onUploadClick={onUploadClick}
                onSelectClick={()=>{}}
                statusViewGalleryProp={"listImg"}
                namePage={namePage}
            />}
</ThemeProvider>

    )
}

export default ContainerMediaComponent