import React from "react"
import LayoutContainerImg from "../../layouts/LayoutContainerImg/LayoutContainerImg";
import EmptyContainerImgComponent from "../EmptyContainerImgComponent/EmptyContainerImgComponent";
import {Dispatch, OnDrop} from "../ContainerMediaComponent/contentCard";
import SingleImgComponent from "../SingleImgComponent/SingleImgComponent";
import {InterfaceContentCard} from "../ContainerMediaComponent/contentCard";

type ContainerSingleImgComponentProps = {
    singleArrayContentCard: InterfaceContentCard[];
    setSingleArrayContentCard: Dispatch<InterfaceContentCard[]>;
    onDrop: OnDrop;
    onUploadClick: (inputElement: React.MutableRefObject<HTMLInputElement>) => void;
    onSelectClick: () => void;
}

const ContainerSingleImgComponent: React.FunctionComponent<ContainerSingleImgComponentProps> = ({
   singleArrayContentCard,
   setSingleArrayContentCard,
   onDrop,
   onUploadClick,
   onSelectClick,
   }) => {
    const contentCard =  (singleArrayContentCard?.length && singleArrayContentCard[0])
    const statusEmptyBox = ( singleArrayContentCard && ! singleArrayContentCard.length) ?? false

    return (
        <LayoutContainerImg headerName={''} isEmpty={statusEmptyBox}>
            {!statusEmptyBox && <SingleImgComponent
                contentCard={contentCard || null}
                setArrayContentCard={setSingleArrayContentCard}
                arrayContentCard={singleArrayContentCard}
                type={"container"}
                onReplaceClick={onSelectClick}
            />
            }
            {statusEmptyBox && <EmptyContainerImgComponent
                onUploadClick={onUploadClick}
                onSelectClick={onSelectClick}
                setArrayContentCard={setSingleArrayContentCard}
                onDrop={onDrop}
                typeArrayContentCard={"single"}                
            />}
        </LayoutContainerImg>
    )
}

export default ContainerSingleImgComponent