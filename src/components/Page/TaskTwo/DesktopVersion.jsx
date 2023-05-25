import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
import { Observer } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimationControl from "./Components/AnimationControl";
import SectionHead from "./SectionHead";

gsap.registerPlugin(Observer, ScrollTrigger);

const DesktopVersion = ({ dataArray, intentObserver, goUp, goDown }) => {
  const isAnimating = useRef(false);
  const mainContainer = useRef(null);
  const directionRef = useRef("nextSlide");
  const reuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let intentObserverCached = Observer.create({
        onUp: async () => {
          // console.log("⬆⬆⬆⬆⬆⬆⬆⬆⬆"); //slide--
          //⬆⬆⬆⬆⬆⬆⬆⬆⬆
          intentObserver.current.disable();
          reuRef.current.removeElement("prevSlide");
          directionRef.current = "prevSlide";
        },
        onDown: async () => {
          // console.log("⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇"); //slide++
          // goUp();
          intentObserver.current.disable();
          reuRef.current.removeElement("nextSlide");
          directionRef.current = "nextSlide";
        },
        // onChange: (self) => {
        //   console.log(
        //     "velocity:",
        //     self.velocityX,
        //     self.velocityY,
        //     "delta:",
        //     self.deltaX,
        //     self.deltaY,
        //     "target element:",
        //     self.target,
        //     "last event:",
        //     self.event
        //   );
        // },
      });
      intentObserver.current = intentObserverCached;
    }, mainContainer);
    return () => {
      ctx.revert(); // cleanup
    };
  }, []);
  return (
    <>
      <div
        className=" row w-100 bg-dark m-0 p-0 flex-1 h-100 min-height-screen "
        ref={mainContainer}
      >
        {/*
         ***************************************************************************************
         ************************************** Section HEad *******************************************
         ***************************************************************************************
         */}

        <div
          className=" col-12 col-lg-5  px-0 h-100  d-flex  flex-column justify-content-end  "
          style={{ minHeight: "100vh" }}
        >
          <AnimationControl>
            <div className="  h-100 w-100 ">
              <div style={{ height: "100vh" }}>
                <SectionHead data={dataArray[0]} />
              </div>
            </div>
          </AnimationControl>
        </div>

        {/* <Section2View /> */}
        {/*
         ***************************************************************************************
         ************************************** Main Body *******************************************
         ***************************************************************************************
         */}
        <div className="  col-12 col-lg-7  position-relative overflow-hidden d-flex gap-2 center px-0">
          <AnimationControl
            ref={reuRef}
            directionRef={directionRef}
            dataArray={dataArray}
            goUp={goUp}
            goDown={goDown}
          >
            {dataArray[0].SectionView}
          </AnimationControl>
        </div>
      </div>
    </>
  );
};

export default DesktopVersion;
