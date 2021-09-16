import React, {useRef} from "react";
import {Box} from "@sanity/ui";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../components/SingleImgComponent/itemTypes";
import {Dispatch, findCard, findIndex, InterfaceContentCard} from "../../components/ContainerMediaComponent/contentCard";
import {XYCoord} from "dnd-core";

type LayoutContainerDragAndDropProps = {
    contentCard: InterfaceContentCard;
    setArrayContentCard: Dispatch<InterfaceContentCard[]>;
    arrayContentCard: InterfaceContentCard[];
    moveCard?: (dragIndex: number, hoverIndex: number,
    arrayContentCard: InterfaceContentCard[], setArrayContentCard: Dispatch<InterfaceContentCard[]>) => void;
    statusDragAndDrop: boolean;
}

const LayoutContainerDragAndDrop: React.FunctionComponent<LayoutContainerDragAndDropProps> = ({
      children,
      contentCard,
      setArrayContentCard,
      arrayContentCard,
      moveCard,
      statusDragAndDrop,
    }) => {
    const ref = useRef<HTMLDivElement>(null)

    const [{handlerId}, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: InterfaceContentCard, monitor: DropTargetMonitor) {
            if (!ref.current || !statusDragAndDrop) {
                return
            }
            const dragIndex = findIndex(item.id, arrayContentCard)
            const hoverIndex = findIndex(contentCard.id, arrayContentCard)
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            if (moveCard) {
                moveCard(dragIndex, hoverIndex, arrayContentCard, setArrayContentCard)
            }
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            // let dropCard = findCard(dragIndex, arrayContentCard)
            // const hoverCard = findCard(hoverIndex, arrayContentCard)
            // dropCard  = {...hoverCard}
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return {id: contentCard.id, index: findIndex(contentCard.id, arrayContentCard)}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.5 : 1
    drag(drop(ref))

    return (
        <Box
            className={"layout-drag-and-drop__container"}
            style={{opacity}}
            ref={ref}
            data-handler-id={handlerId}
        >
            {children}
        </Box>
    )
}

export default LayoutContainerDragAndDrop