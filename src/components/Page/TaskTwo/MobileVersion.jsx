import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import SectionHead from "./SectionHead";
import { Section1View } from "./Components/SectionView";

const MobileVersion = ({ dataArray }) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{ height: "100vh" }}
      >
        {dataArray.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                className=" d-flex flex-column h-100 w-100 "
                style={{
                  minHeight: "100vh",
                  height: "100vh",
                  backgroundColor: "red",
                }}
              >
                <div className="" style={{ height: "50vh" }}>
                  {item.SectionView}
                </div>
                <div className="bg-light" style={{ height: "50vh" }}>
                  <SectionHead data={item} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MobileVersion;
