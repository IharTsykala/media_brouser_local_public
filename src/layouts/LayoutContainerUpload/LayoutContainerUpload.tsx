import React from "react";
import {Box} from "@sanity/ui";
import {DropTargetMonitor, useDrop} from "react-dnd";
import { NativeTypes } from 'react-dnd-html5-backend'
import {Dispatch, InterfaceContentCard, OnDrop} from "../../components/ContainerMediaComponent/contentCard";

type LayoutContainerUploadProps = {
    setArrayContentCard: Dispatch<InterfaceContentCard[]>;
    onDrop: OnDrop,
    typeArrayContentCard?: string
}

const LayoutContainerUpload: React.FunctionComponent<LayoutContainerUploadProps> = ({
   children,
   onDrop,
   setArrayContentCard,
   typeArrayContentCard
   }) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(inputTarget: { files: any[] }) {
                if (onDrop) {
                    const inputTargetFiles = typeArrayContentCard === "single"
                        ? [inputTarget.files[0]]
                        : inputTarget.files
                    onDrop(inputTargetFiles, setArrayContentCard)
                }
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
    )

    const isActive = canDrop && isOver

    return (
        <Box
            className={"layout-upload-box__container"}
            style={{border: `1px ${isActive? "green": "white"} dotted`}}
            ref={drop}
        >
            {children}
        </Box>
    )
}

export default LayoutContainerUpload