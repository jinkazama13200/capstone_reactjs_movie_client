import React from "react";
import MovieLoadingIcon from "../../media/loadingData.gif";
import { styled } from "@mui/system";

const LoadingPageContainer = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 1000;
`;
const LoadingIcon = styled("img")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;

export default function LoadingPage() {
  return (
    <LoadingPageContainer>
      <LoadingIcon width={200} height={200} src={MovieLoadingIcon} alt="" />
    </LoadingPageContainer>
  );
}
