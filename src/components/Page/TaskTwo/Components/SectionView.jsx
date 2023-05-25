import {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Section1View = ({ bgColor }) => {
  return (
    <div
      className=" w-100 h-100 position-relative overflow-hidden d-flex gap-2 center"
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}

      <div className="" style={{ width: "35%" }}>
        <img
          src="/assets/nexgtv-entertainment-mobile-app-development.png"
          alt=""
          className=" h-auto w-100 target-y-negative "
        />
      </div>
      <div className=" " style={{ width: "35%" }}>
        <img
          src="/assets/nexgtv-mobile-app-ui-design.png"
          alt=""
          className=" h-auto w-100  target-y-positive "
        />
      </div>
    </div>
  );
};
const Section2View = ({ bgColor }) => {
  return (
    <div
      className=" w-100 h-100 position-relative overflow-hidden "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}
      <div
        className=" d-flex gap-5 center w-100 h-100 justify-content-end"
        // style={{ transform: "translateX(15%)" }}
      >
        <div
          className=""
          style={{ width: "30%", transform: "translateY(35%)" }}
        >
          <img
            src="/assets/veme-blockchain-app-developed.png"
            alt=""
            className=" h-auto w-100 target-y-negative"
          />
        </div>
        <div
          className=" "
          style={{ width: "30%", transform: "translateY(-35%)" }}
        >
          <img
            src="/assets/veme-app-ui-design.png"
            alt=""
            className=" h-auto w-100  target-y-positive"
          />
        </div>
      </div>
    </div>
  );
};
const Section3View = ({ bgColor }) => {
  return (
    <div
      className="  w-100 h-100  position-relative overflow-hidden d-flex gap-2 center "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}
      <div
        className=" d-flex gap-5 center w-100 h-100 justify-content-end px-4"
        // style={{ transform: "translateX(15%)" }}
      >
        <div
          className=""
          style={{ width: "35%", transform: "translateY(25%)" }}
        >
          <img
            src="/assets/nasa-fitness-tracking-mobile-app.png"
            alt=""
            className=" h-auto w-100 target-y-negative "
          />
        </div>
        <div
          className=" "
          style={{ width: "30%", transform: "translateY(-20%)" }}
        >
          <img
            src="/assets/measure-total-body-weight-through-fitness-app.png"
            alt=""
            className=" h-auto w-100 target-y-positive "
          />
        </div>
      </div>
    </div>
  );
};
const Section4View = ({ bgColor }) => {
  return (
    <div
      className="  w-100 h-100  position-relative overflow-hidden d-flex gap-2 center "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}
      <div
        className=" d-flex gap-5 center w-100 h-100 justify-content-end px-4"
        style={{
          // transform: "translateX(15%)",
          zIndex: 100,
        }}
      >
        <div
          className=""
          style={{ width: "35%", transform: "translateY(50%)" }}
        >
          <img
            src="/assets/domi-img1.png"
            alt=""
            className=" h-auto w-100 target-y-negative "
          />
        </div>
        <div
          className=" "
          style={{ width: "30%", transform: "translateY(-25%)" }}
        >
          <img
            src="/assets/ux-strategy-for-mobile-app-devlopment.png"
            alt=""
            className=" h-auto w-100 target-y-positive "
          />
        </div>
      </div>
      <div>
        <img
          src="/assets/dominos-bread1.png"
          alt=""
          className=" h-auto"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "calc(9rem + 9vw) ",
            transform: "translate(10%, 30%)",
          }}
        />
        <img
          src="/assets/dominos-bread.png"
          alt=""
          className=" h-auto"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "calc(7rem + 7vw) ",
            transform: "translate(10%, -60%)",
          }}
        />
        <img
          src="/assets/pizza_box.png"
          alt=""
          className=" h-auto"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "calc(12rem + 12vw) ",
            transform: "translate(-0%, -25%)",
          }}
        />
      </div>
    </div>
  );
};

const Section5View = ({ bgColor }) => {
  return (
    <div
      className="  w-100 h-100  position-relative overflow-hidden d-flex gap-2 center "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}
      <div
        className=" d-flex gap-5 center w-100 h-100 justify-content-end px-4"
        // style={{ transform: "translateX(15%)" }}
      >
        <div
          className=""
          style={{ width: "35%", transform: "translateY(25%)" }}
        >
          <img
            src="/assets/karavan_2.png"
            alt=""
            className=" h-auto w-100 target-y-negative "
          />
        </div>
        <div
          className=" "
          style={{ width: "30%", transform: "translateY(-20%)" }}
        >
          <img
            src="/assets/developers-for-social-media-app.png"
            alt=""
            className=" h-auto w-100 target-y-positive "
          />
        </div>
      </div>
    </div>
  );
};

const Section6View = ({ bgColor }) => {
  return (
    <div
      className="  w-100 h-100  position-relative overflow-hidden  "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
        maxHeight: "100vh",
      }}
    >
      {/* Section */}
      <div
        className=" w-100 h-100 overflow-hidden"
        // style={{ width: "100%", transform: "translateY(25%)" }}
      >
        <img
          src="/assets/interior.jpg"
          alt=""
          className=" h-100 w-100  "
          style={{ objectFit: "cover", objectPosition: "left " }}
        />
      </div>
      <div
        className=" "
        style={{ width: "100%", transform: "translateY(-100%)" }}
      >
        <img
          src="/assets/erp-app-development-service.png"
          alt=""
          className=" h-100 w-100 target-y-negative "
        />
      </div>
      {/* <div
        className=" d-flex gap-5 center w-100 h-100 justify-content-end px-4"
        // style={{ transform: "translateX(15%)" }}
      >
      </div> */}
    </div>
  );
};
const Section7View = ({ bgColor }) => {
  return (
    <div
      className="  w-100 h-100  position-relative overflow-hidden d-flex gap-2 center "
      style={{
        // transform: "translateX(10%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Section */}
      <div
        className=" d-flex gap-0 center w-100 h-100 justify-content-end px-4"
        // style={{ transform: "translateX(15%)" }}
      >
        <div
          className=""
          style={{ width: "35%", transform: "translate(0%,25%)", zIndex: 100 }}
        >
          <img
            src="/assets/melltoo-img2.png"
            alt=""
            className=" h-auto w-100 target-y-negative "
          />
        </div>
        <div
          className=" "
          style={{ width: "30%", transform: "translate(-40%,-10%)" }}
        >
          <img
            src="/assets/melltoo-img1.png"
            alt=""
            className=" h-auto w-100 target-y-positive "
          />
        </div>
      </div>
    </div>
  );
};

export {
  Section1View,
  Section2View,
  Section3View,
  Section4View,
  Section5View,
  Section6View,
  Section7View,
};
