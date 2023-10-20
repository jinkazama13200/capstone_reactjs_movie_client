import React from "react";
import MovieInfo from "./MovieInfo/MovieInfo";
import ShowTimes from "./ShowTimes";
import Footer from "../../components/Footer/Footer";

export default function Details() {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <MovieInfo />
      <ShowTimes />
      <Footer />
    </div>
  );
}
