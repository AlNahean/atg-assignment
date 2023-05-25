import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const SVG = ({ dataArray }) => {
  let id = dataArray[0].id;
  let strokeWidth = useRef({ length: (1000 / 7) * (id - 1) });
  let strokePath = useRef(null);

  useEffect(() => {
    // strokeWidth.current = { length: (1000 / 7) * (id - 1) - (35 / 7) * id };
    // gsap.fromTo(
    //   strokeWidth.current,
    //   { length: 0 },
    //   { length: (1000 / 7) * (id - 1), duration: 2 }
    // );
    //  //////////////////////////////////////////////////////////////
    // let totalLength = strokePath.current.getTotalLength();
    // strokePath.current.style.strokeDashoffset =
    //   (totalLength / 7) * id - -(35 / 7) * id;
    // strokePath.current.style.strokeDasharray = totalLength;
    //  //////////////////////////////////////////////////////////////
    //  //////////////////////////////////////////////////////////////
    // let totalLength = strokePath.current.getTotalLength();
    // strokePath.current.style.strokeDasharray = totalLength;
    // strokePath.current.style.strokeDashoffset =
    //   (totalLength / 7) * 4 + (35 / 7) * id;

    //  //////////////////////////////////////////////////////////////

    gsap.to(
      strokePath.current,
      //   { strokeDasharray: 0 },
      { strokeDasharray: (1000 / 7) * (id - 1) - (35 / 7) * id }
    );
    return () => {};
  }, [dataArray]);

  console.log(strokeWidth, id, "strokeWidth");
  return (
    <>
      <svg
        version="1.1"
        id="transring"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 414 414"
        style={
          {
            //   enableBackground: "new 0 0 414 414",
            //   backgroundColor: "lightblue",
          }
        }
        xmlSpace="preserve"
      >
        <path
          id="Transparent_Ring"
          className="transrg"
          style={{
            opacity: "0.4",
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            enableBackground: "new",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
        />
        <path
          ref={strokePath}
          id="Opaque_Ring"
          className="transrgwht"
          //   strokeDasharray="1000,1000"
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeWidth: 2,
            // strokeMiterlimit: 10,
            strokeDasharray: `${0}, 1000`,
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
        />
        <g id="Dots1" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill1"
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
          <g>
            {id >= 1 && (
              <path
                className="dotsstro1"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
              />
            )}
          </g>
        </g>
        <g id="Dots2" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill2"
              style={
                id >= 2
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
          <g>
            {id >= 2 && (
              <path
                className="dotsstro2"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
              />
            )}
          </g>
        </g>
        <g id="Dots3" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill3"
              style={
                id >= 3
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
          <g>
            {id >= 3 && (
              <path
                className="dotsstro3"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
              />
            )}
          </g>
        </g>
        <g id="Dots4" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill4"
              style={
                id >= 4
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
          <g>
            {id >= 4 && (
              <path
                className="dotsstro4"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
              />
            )}
          </g>
        </g>
        <g id="Dots5" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill5"
              style={
                id >= 5
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
          <g>
            {id >= 5 && (
              <path
                className="dotsstro5"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
              />
            )}
          </g>
        </g>
        <g id="Dots6" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill6"
              style={
                id >= 6
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
          <g>
            {id >= 6 && (
              <path
                className="dotsstro6"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
              />
            )}
          </g>
        </g>
        <g id="Dots7" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill7"
              style={
                id >= 7
                  ? { fill: "rgb(0, 146, 255)", opacity: 1 }
                  : { fill: "#FFF", opacity: 0.4 }
              }
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
          <g>
            {id >= 7 && (
              <path
                className="dotsstro7"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
              />
            )}
          </g>
        </g>
      </svg>
    </>
  );
};

export default SVG;
