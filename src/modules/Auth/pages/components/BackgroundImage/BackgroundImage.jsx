import React from "react";
import { styled } from "@mui/system";

const BackgroundImage = styled("div")`
  background-image: url("https://wallpapercave.com/wp/wp1945897.jpg");
  background-size: 100%;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
  }
`;

export default BackgroundImage;
