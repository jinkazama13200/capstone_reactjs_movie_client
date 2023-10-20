import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieBanner } from "../../../apis/movieAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import styled from "@emotion/styled";
import "./styles.css";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const CustomButtonPrevSlide = styled("div")`
  position: absolute;
  top: 50%;
  left: 30px;
  color: lightgray;
  font-size: 50px;
  z-index: 10;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`;
const CustomButtonNextSlide = styled("div")`
  position: absolute;
  top: 50%;
  right: 30px;
  color: lightgray;
  font-size: 50px;
  z-index: 10;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`;

export default function Banner() {
  const {
    data: banners = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: getMovieBanner,
  });

  return (
    <Swiper
      style={{ position: "relative" }}
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      pagination={{
        clickable: true,
        bulletClass: "carousel-bullets-1",
        bulletActiveClass: "carousel-bullets-1-active",
      }}
      autoplay={{ delay: 1000 }}
    >
      {banners.map((item) => {
        return (
          <SwiperSlide key={item.maBanner}>
            <div
              style={{
                backgroundImage: `url('${item.hinhAnh}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "auto",
                backgroundPosition: "center",
              }}
            >
              <img
                style={{ opacity: 0 }}
                width="100%"
                src={item.hinhAnh}
                alt={item.maPhim}
              />
            </div>
          </SwiperSlide>
        );
      })}
      <CustomButtonPrevSlide className="button-prev-slide">
        <MdOutlineKeyboardDoubleArrowLeft />
      </CustomButtonPrevSlide>
      <CustomButtonNextSlide className="button-next-slide">
        <MdOutlineKeyboardDoubleArrowRight />
      </CustomButtonNextSlide>
    </Swiper>
  );
}
