import React, {useRef} from "react";
import {Box, Button} from "@sanity/ui";
import LayoutContainerUpload from "../../layouts/LayoutContainerUpload/LayoutContainerUpload";
import './EmptyContainerImgComponent.scss';
import { InterfaceContentCard, Dispatch } from "../../services/interfacesAndTypes/common"
import { OnDrop } from "../../services/interfacesAndTypes/img";
import { handlerUploadDocument } from "../../services/functions/img";

type EmptyContainerImgComponentProps = {
    onUploadClick: (inputElement: React.MutableRefObject<HTMLInputElement>) => void;
    onSelectClick: () => void;
    setArrayContentCard: Dispatch<InterfaceContentCard[]>;
    onDrop: OnDrop;
    typeArrayContentCard?: string,    
}

const AddIcon: React.FunctionComponent = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="#37383D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke="#37383D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const FolderIcon: React.FunctionComponent = () => {
    return (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6 3.19999L8.19999 0.799988H0.399993L1.23999 12.2L3.03999 3.19999H10.6ZM3.99999 4.39999L1.59999 16.4H17.2L19.6 4.39999H3.99999Z" fill="#37383D"/>
        </svg>
    )
}

const EmptyContainerImgComponent: React.FunctionComponent<EmptyContainerImgComponentProps> = ({
    onUploadClick,
    onSelectClick,
    setArrayContentCard,
    onDrop,
    typeArrayContentCard,    
}) => {
    const ref: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    return (
        <Box className={"empty-container-img"}>
            <Box className={"empty-container-img__header-container"}>
            <LayoutContainerUpload
                setArrayContentCard={setArrayContentCard}
                onDrop={onDrop}
                typeArrayContentCard={typeArrayContentCard}
            >
                <h4 className={`empty-container-img__header-text above`}>Drag a file here</h4>
                <p className={`empty-container-img__header-text below`}>Max size 50mb</p>
            </LayoutContainerUpload>
            </Box>
            <Box className={"empty-container-img__buttons-container"}>
                <Button className={"empty-container-img__button left"}
                        onClick={()=>onUploadClick(ref)}
                >
                    <input
                        ref={ref}
                        type={"file"}
                        className={"empty-container-img__input-file"}
                        onChange={(e) => handlerUploadDocument(e, setArrayContentCard, typeArrayContentCard)}
                        style={{height: `0`, width: `0`}}
                        multiple={!(typeArrayContentCard === "single")}
                    />
                    <AddIcon/>Upload new
                </Button>
                <Button className={"empty-container-img__button right"}
                        onClick={onSelectClick}
                >
                    <FolderIcon/>From Media Library
                </Button>
            </Box>
        </Box>
    )
}

export default EmptyContainerImgComponent