import { Global } from "@emotion/react"
import React from "react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: "Playwrite";
            src: url("/font/PlaywriteAUNSW-VariableFont_wght.ttf");
        }
      `}
  />
)

export default Fonts;