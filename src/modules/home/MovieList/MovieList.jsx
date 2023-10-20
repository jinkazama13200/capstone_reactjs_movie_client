import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../apis/movieAPI";
import { Box, CssBaseline, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import MovieItem from "./MovieItem/MovieItem";
import "./styles.css";

export default function MovieList() {
  const { data: movies = [] } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return (
    <CssBaseline>
      <Container id="LichChieu">
        <Box
          sx={{
            marginTop: "50px",
            padding: "20px 0px",
          }}
        >
          <Swiper
            freeMode
            spaceBetween={10}
            pagination
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
              425: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 2,
              },
            }}
          >
            {movies.map((item) => {
              return (
                <SwiperSlide key={item.maPhim}>
                  <MovieItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </CssBaseline>
  );
}
