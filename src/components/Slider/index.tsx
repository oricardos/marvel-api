import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/bundle";

export const Slider = ({ settings, children }) => {
  return (
    <>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </>
  );
};
