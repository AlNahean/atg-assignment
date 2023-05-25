import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import { gsap } from "gsap";
import { Observer } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SVG from "./Components/svg.jsx";

import {
  Section1View,
  Section2View,
  Section3View,
  Section4View,
  Section5View,
  Section6View,
  Section7View,
} from "./Components/SectionView";
import DesktopVersion from "./DesktopVersion.jsx";
import MobileVersion from "./MobileVersion.jsx";

const UlData = [
  {
    id: 1,
    primaryColor: "#6718ac",
    secondaryColor: "#d2d1d4",
    title: "ABC 123",
    descreption: "We are the best web development company in the world",
    SectionView: <Section1View bgColor={"#d2d1d4"} />,
    award: "/assets/world-communication-awards-for-best-digital-experience.png",
    caseStudy: true,
    state: "",

    fixedTitle: {
      top: "",
      mid: "25M+ Downloads",
      bottom: "on appstore & google playstore",
    },
  },
  {
    id: 2,
    primaryColor: "#532dd3",
    secondaryColor: "#210967",
    title: "ABC 234",
    descreption: "We are the best web development company in the world",
    SectionView: <Section2View bgColor={"#210967"} />,
    state: "",
    caseStudy: false,

    fixedTitle: {
      top: "The Next Big",
      mid: "Blockchain",
      bottom: "Revolution",
    },
  },
  {
    id: 3,
    primaryColor: "#13163e",
    secondaryColor: "#1a1c4e",
    title: "ABC 345",
    descreption: "We are the best web development company in the world",
    SectionView: <Section3View bgColor={"#1a1c4e"} />,
    state: "",
    caseStudy: false,

    fixedTitle: {
      top: "Powered bu advance",
      mid: "NASA",
      bottom: "algorithms",
    },
  },
  {
    id: 4,
    primaryColor: "#1c2c41",
    secondaryColor: "#131921",
    title: "ABC 456",
    descreption: "We are the best web development company in the world",
    SectionView: <Section4View bgColor={"#131921"} />,
    state: "",
    caseStudy: true,

    fixedTitle: {
      top: "Redefining",
      mid: "UX Strategy",
      bottom: "and UI design",
    },
  },
  {
    id: 5,
    primaryColor: "#1751a7",
    secondaryColor: "#32d2e2",
    title: "ABC 567",
    descreption: "we are the best AR Development company in the world",
    SectionView: <Section5View bgColor={"#32d2e2"} />,
    state: "",
    caseStudy: true,

    fixedTitle: {
      top: "Text Headline",
      mid: "Text Headline",
      bottom: "Footer headline",
    },
  },
  {
    id: 6,
    primaryColor: "#063297",
    secondaryColor: "#ad2406",
    title: "ABC 678",
    descreption:
      "Best since 2017 We offer wide range of web development and app development.",
    SectionView: <Section6View bgColor={"#ad2406"} />,
    state: "",
    caseStudy: true,

    fixedTitle: {
      top: "Developing ERP Solution for",
      mid: "Text Headline",
      bottom: "in furniture industry",
    },
  },
  {
    id: 7,
    primaryColor: "#068852",
    secondaryColor: "#06bd6f",
    title: "ABC 23478",
    descreption: "We are the best web development company in the world",
    SectionView: <Section7View bgColor={"#06bd6f"} />,
    award: "/assets/mobile-app-of-the-year-by-entrepreneur.png",
    state: "",
    caseStudy: false,

    fixedTitle: {
      top: "Biggest Classifieds",
      mid: "East Asia",
      bottom: "Countries",
    },
  },
];

gsap.registerPlugin(Observer, ScrollTrigger);
const TaskTwo = () => {
  const [dataArray, setDataArray] = useState(UlData);
  const intentObserver = useRef(null);

  const [windowSize, setWindowSize] = useState(900);

  useEffect(() => {
    return () => {};
  }, [dataArray]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const goUp = () => {
    // console.log("up", window.scrollY - window.innerHeight);
    // window.scrollTo(0, window.scrollY - window.innerHeight);
    let cachedArray = dataArray;
    // console.log(myArray, "myarrayUp", cachedArray[0]);
    // cachedArray.unshift(cachedArray.pop());
    cachedArray.push(cachedArray.shift());
    // console.log(cachedArray);
    // myArray = cachedArray;

    setDataArray([...cachedArray]);

    // console.log("go up", cachedArray);

    // let tl = gsap.timeline({
    //   onComplete: () => {},
    // });

    // //
    // tl.fromTo(
    //   ".box-0",
    //   { opacity: 1, y: "100%" },
    //   { opacity: 1, y: "0%", duration: 1 },
    //   ">"
    // );
    // tl.fromTo(
    //   ".box-1",
    //   { opacity: 1, y: "0%" },
    //   { opacity: 1, y: "-100%", duration: 1 },
    //   ">"
    // );

    // //////////////////////////////////////////////////////////////s

    // setTimeout(() => {
    //   intentObserver.current.enable();
    // }, 600);
    intentObserver.current.enable();
  };
  const goDown = () => {
    let cachedArray = dataArray;
    cachedArray.unshift(cachedArray.pop());
    setDataArray([...cachedArray]);
    intentObserver.current.enable();
  };

  return (
    <div
      className=" container-fluid h-100 bg-danger px-0 "
      style={{ minHeight: "100vh" }}
    >
      {/*
       ***************************************************************************************
       ************************************** Fixed Top *******************************************
       ***************************************************************************************
       */}
      <div
        className=" fixed-top text-white d-none d-lg-block"
        style={{
          left: "25vw",
          top: "8vh",
        }}
      >
        <div
          style={{
            height: "28rem",
            width: "28rem",
            backgroundColor: dataArray[0].primaryColor,
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <SVG dataArray={dataArray} />
          <div
            className=" position-absolute  "
            style={{
              top: "50%",
              left: "20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className=" d-flex flex-column ">
              <div
                className="  position-relative overflow-hidden "
                style={{ maxHeight: "3rem" }}
              >
                <p
                  className=" mb-0 target-y-axis"
                  style={{ fontSize: "2rem", whiteSpace: "nowrap" }}
                >
                  {dataArray[0].fixedTitle?.top}
                </p>
              </div>
              <div
                className=" w-100 position-relative overflow-hidden "
                style={{ maxHeight: "5rem" }}
              >
                <h1
                  className=" mb-0 text-nowrap target-y-axis "
                  style={{ fontSize: "4rem" }}
                >
                  {dataArray[0].fixedTitle.mid}
                </h1>
              </div>
              <div
                className=" w-100 position-relative overflow-hidden "
                style={{ maxHeight: "3rem" }}
              >
                <p
                  className=" mb-0 target-y-axis text-end"
                  style={{ fontSize: "2rem", whiteSpace: "nowrap" }}
                >
                  {dataArray[0].fixedTitle.bottom}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
       ***************************************************************************************
       ************************************** Mobile Version*******************************************
       ***************************************************************************************
       */}

      <div className=" d-bloxk d-lg-none h-100 w-100">
        <MobileVersion dataArray={dataArray} />
      </div>
      {/*
       ***************************************************************************************
       ************************************** Desktop Version*******************************************
       ***************************************************************************************
       */}
      {windowSize >= 992 && (
        <div className=" d-none d-lg-block">
          <DesktopVersion
            dataArray={dataArray}
            setDataArray={setDataArray}
            goUp={goUp}
            goDown={goDown}
            intentObserver={intentObserver}
          />
        </div>
      )}
    </div>
  );
};

export default TaskTwo;
