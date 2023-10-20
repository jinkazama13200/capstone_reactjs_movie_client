import React from "react";
import Home from "../../modules/home/Home";
import NotFoundIcon from "../../media/404.png";
import { StyledButton } from "../Button/Button";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LoadingpPageContainer = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const LoadingIcon = styled("img")`
  width: 300px;
  height: 300px;
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <LoadingpPageContainer>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingIcon src={NotFoundIcon} alt=""></LoadingIcon>
        <StyledButton onClick={() => navigate("/")} variant="contained">
          BACK TO HOME
        </StyledButton>
      </div>
    </LoadingpPageContainer>
  );
}
