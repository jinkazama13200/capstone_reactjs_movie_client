import React from "react";
import { styled } from "@mui/system";
import TicketLoadingIcon from "../../media/ticketLoading.gif";

const LoadingPageContainer = styled("div")`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const LoadingIcon = styled("img")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;

export default function TicketLoadingPage() {
  return (
    <LoadingPageContainer>
      <LoadingIcon src={TicketLoadingIcon} alt=""></LoadingIcon>
    </LoadingPageContainer>
  );
}
