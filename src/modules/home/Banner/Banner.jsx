import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import styled from "@emotion/styled";
import "./styles.css";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { banner_1, banner_2, banner_3 } from "../../../assets/images/index";

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
  const [banners, setBanners] = useState([
    {
      banner: banner_1,
    },
    {
      banner: banner_2,
    },
    {
      banner: banner_3,
    },
  ]);

  return (
    <Swiper
      // style={{ position: "relative" }}
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
      {banners.length > 0 &&
        banners.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url('${item.banner}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "90vh",
                  backgroundPosition: "center",
                  objectFit: "cover",
                }}
              >
                <img
                  style={{ opacity: 0 }}
                  width="100%"
                  src={item.banner}
                  alt={index}
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
