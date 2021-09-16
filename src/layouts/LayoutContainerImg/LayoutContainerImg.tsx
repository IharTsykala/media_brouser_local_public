import React from "react";
import {Box, Card} from "@sanity/ui";

import './LayoutContainerImg.scss'

type LayoutContainerImgProps = {
  headerName: string,
  isEmpty?: boolean,
}

const LayoutContainerImg: React.FunctionComponent<LayoutContainerImgProps> =
  ({children, headerName, isEmpty}) => {
    const outsideClass = isEmpty
      ? 'layout-gallery-img__outside layout-gallery-img__outside--empty'
      : 'layout-gallery-img__outside'

    return (
      <Card padding={4} className={outsideClass}>
        <Box
          className={"layout-gallery-img__inside"}
          padding={[3, 3, 4, 5]}
          style={{width: "100%", margin: "0 auto"}}
        >
          {headerName && <h4>{headerName}</h4>}
          {children}
        </Box>
      </Card>
    );
}

export default LayoutContainerImg