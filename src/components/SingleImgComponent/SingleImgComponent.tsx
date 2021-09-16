import React, {useState} from "react"
import {Box} from "@sanity/ui"
import {InterfaceContentCard, Dispatch, removeImgFromGallery} from "../ContainerMediaComponent/contentCard";

type SingleImgComponentProps = {
    contentCard: InterfaceContentCard | null;
    setArrayContentCard: Dispatch<InterfaceContentCard[]>;
    arrayContentCard: InterfaceContentCard[]
    type: string;
    onReplaceClick: () => void,
}

const ReplaceIcon: React.FunctionComponent = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5228 21.5403V20.4727H30.3878V21.5403V29.013L24.4247 29.013L25.805 27.6328L26.5598 26.8779L25.0501 25.3682L24.2952 26.1231L21.0926 29.3257L20.3378 30.0805L21.0926 30.8354L24.2952 34.038L25.0501 34.7928L26.5598 33.2831L25.805 32.5283L24.4247 31.1481H31.4553H32.5228V30.0805V21.5403Z" fill="#37383D"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 26.2526L15 27.3201L17.1351 27.3201L17.1351 26.2526L17.1351 18.7799L23.0981 18.7799L21.7179 20.1601L20.963 20.9149L22.4727 22.4246L23.2276 21.6698L26.4302 18.4672L27.1851 17.7123L26.4302 16.9575L23.2276 13.7549L22.4727 13L20.963 14.5097L21.7179 15.2646L23.0981 16.6448L16.0675 16.6448L15 16.6448L15 17.7123L15 26.2526Z" fill="#37383D"/>
    </svg>
)

export const RemoveIcon: React.FunctionComponent = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18L24 24M24 24L30 30M24 24L30 18M24 24L18 30" stroke="#37383D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

const SingleImgComponent: React.FunctionComponent<SingleImgComponentProps> = ({
    contentCard,
    setArrayContentCard,
    arrayContentCard,
    type,
    onReplaceClick,
}) => {
    const [statusModal, setStatusModal] = useState(false)

    return (
        <Box className={`single-img ${type}`}
            style={{
                height: `100%`,
                position: `relative`,
                margin: 'auto',
            }}
            onMouseEnter={()=>setStatusModal((true))}
            onMouseLeave={()=>setStatusModal(false)}
        >
            <img className={`single-img__img`}
                src={contentCard?.src}
                alt={contentCard?.description}
                style={{
                    width: `50%`,
                }}
            />
            {statusModal && <div className="single-img__buttons">
                {/* <button onClick={onReplaceClick}>
                    It will be editIcon
                </button>                 */}
                <button onClick={onReplaceClick}>
                    <ReplaceIcon/>
                </button>
                <button onClick={()=>removeImgFromGallery(arrayContentCard, setArrayContentCard, contentCard?.id || null)}>
                    <RemoveIcon/>
                </button>
            </div>}
            <h3 className={`single-img__header`}>{contentCard?.description || ''}</h3>
        </Box>
    )
}

export default SingleImgComponent