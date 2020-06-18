import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const override = css`
display: block;
margin: 0 auto;
border-color: "#f5a142";
`;

export default function Loader(props) {
    return (
        <div className="sweet-loading" style={{alignSelf: 'center'}}>
        <FadeLoader
         css={override}
          size={150}
          color={"#f5a142"}
          loading={props.loading}
        />
      </div>
    )
}
