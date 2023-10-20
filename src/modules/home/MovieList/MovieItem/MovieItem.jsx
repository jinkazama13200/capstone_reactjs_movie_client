import React, { useState } from "react";
import { styled } from "@mui/system";
import theme from "../../../../theme";
import { StyledButton } from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Movie = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
});
const MovieImg = styled("img")({
  width: "100%",
  opacity: 0,
  cursor: "pointer",
});

const MovieTitle = styled("a")`
  text-decoration: none;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  padding: 10px 0;
  color: black;
  height: 40px;
  word-break: keep-all;
`;
const MovieImgDiv = styled("div")`
  overflow: hidden;
  border-radius: 4px;
  background-position: "center";
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function MovieItem({ item }) {
  const { biDanh, hinhAnh, tenPhim, maPhim } = item;

  const navigate = useNavigate();

  const handleChooseMovie = (movieId) => {
    navigate(`/details/${movieId}`);
  };

  return (
    <Movie>
      <MovieImgDiv
        style={{
          backgroundImage: `url(${hinhAnh})`,
        }}
      >
        <MovieImg src={hinhAnh} alt={biDanh} />
      </MovieImgDiv>
      <div style={{ padding: "0px 5px" }}>
        <MovieTitle>{tenPhim}</MovieTitle>
      </div>
      <StyledButton
        fullWidth
        onClick={() => handleChooseMovie(maPhim)}
        variant="contained"
      >
        Mua Vé
      </StyledButton>
    </Movie>
  );
}
