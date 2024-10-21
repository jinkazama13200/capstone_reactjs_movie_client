import React from "react";
import MovieInfo from "./MovieInfo/MovieInfo";
import ShowTimes from "./ShowTimes";
import Footer from "../../components/Footer/Footer";

export default function Details() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${"https://img.freepik.com/free-vector/realistic-film-strip-black-background-vector-illustration_1017-38234.jpg?t=st=1729505161~exp=1729508761~hmac=b8e63e117a5d615c57a3e4d191a4e94de0b4b0bab01446dcd45c8be1a36bde76&w=1380"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
      }}
    >
      <MovieInfo />
      <ShowTimes />
      <Footer />
    </div>
  );
}
