import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
import CinemaSystems from "./CinemaSystems";
import Footer from "../../components/Footer/Footer";
import HomeApp from "./HomeApp/HomeApp";
import MovieSelectSys from "./MovieSelectSys/MovieSelectSys";

export default function Home() {
  return (
    <div>
      <Banner />
      <MovieSelectSys />
      <MovieList />
      <CinemaSystems />
      <HomeApp />
      <Footer />
    </div>
  );
}
