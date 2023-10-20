import React from "react";
import backNew from "../../media/back-news.png";

export default function Br() {
  return (
    <div
      style={{
        height: "100px",
        backgroundImage: `url(${backNew})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
