import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
// import "./ObserverStyle.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

let myArray = [
  { id: 0, title: "My 1St page of dataArray", bg: "red" },
  { id: 1, title: "My 2nd page of dataArray", bg: "green" },
  { id: 2, title: "My 3rd page of dataArray", bg: "blue" },
];

const AnimationControl = forwardRef(
  ({ children, dataArray, goUp, goDown, directionRef = "nextSlide" }, ref) => {
    const el = useRef(null);
    const tlll = useRef(null);
    // const [testCtx, setTestCtx] = useState(gsap.context(() => {}));
    const testCtx = useRef(null);
    useLayoutEffect(() => {
      // tlll.current?.restart();
      // console.log(
      //   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      //   dataArray,
      //   directionRef
      // );
      if (directionRef.current === "nextSlide") {
        // tlll.current.fromTo(".my-target", { y: "100%" }, { y: 0 });
        // gsap.fromTo(".my-target", { y: "100%" }, { y: 0 });
        testCtx.current?.slideFromNegative();
      } else {
        testCtx.current?.slideFromPositive();
        // tlll.current.fromTo(".my-target", { y: "100%" }, { y: 0 });
        // gsap.fromTo(".my-target", { y: "-100%" }, { y: 0 });
      }
      let ctx = gsap.context(() => {
        // alert("aa");
        tlll.current = gsap.timeline({
          paused: true,
          onComplete: () => {
            // alert("aaa");
          },
        });
        tlll.current.fromTo(".my-target", { y: "100%" }, { y: 0 });

        tlll.current.play();

        let tl = gsap.timeline();

        if (directionRef.current === "nextSlide") {
          // classname(box-positive/box-negative)
          tl.fromTo(".box", { y: "-100%" }, { y: 0 });
          tl.fromTo(".target-y-positive", { y: "-100%" }, { y: 0 }, 0);
          tl.fromTo(".target-y-negative", { y: "100%" }, { y: 0 }, 0);
        } else {
          tl.fromTo(".box", { y: "100%" }, { y: 0 });
          tl.fromTo(".target-y-positive", { y: "-100%" }, { y: 0 }, 0);
          tl.fromTo(".target-y-negative", { y: "100%" }, { y: 0 }, 0);
        }
        tl.fromTo(
          ".my-target-h1",
          { opacity: 0.5, rotateX: "20deg", x: 20 },
          { opacity: 1, rotateX: "0deg", x: 0, duration: "1" }
        );
      }, el);

      testCtx.current = gsap.context(() => {});
      testCtx.current.add("removeNext", () => {
        let tl = gsap.timeline({
          onComplete: () => {
            goUp();
          },
        });
        tl.to(
          ".box",
          {
            y: "100%",
          },
          0
        );
        tl.to(
          ".target-y-positive",
          {
            y: "-100%",
          },
          0
        );
        tl.to(
          ".target-y-negative",
          {
            y: "100%",
          },
          0
        );
        tl.to(
          ".target-y-axis",
          {
            y: "-100%",
          },
          0
        );
      });
      testCtx.current.add("removePrev", () => {
        let tl = gsap.timeline({
          onComplete: () => {
            goDown();
          },
        });
        tl.to(
          ".box",
          {
            y: "-100%",
          },
          0
        );
        tl.to(
          ".target-y-positive",
          {
            y: "-100%",
          },
          0
        );
        tl.to(
          ".target-y-negative",
          {
            y: "100%",
          },
          0
        );

        tl.to(
          ".target-y-axis",
          {
            y: "100%",
          },
          0
        );
      });
      testCtx.current.add("slideFromPositive", () => {
        let tl = gsap.timeline({
          // onComplete: () => {
          //   // goDown();
          // },
        });

        tl.fromTo(".target-y-axis", { y: "-100%" }, { y: 0 });
      });
      testCtx.current.add("slideFromNegative", () => {
        let tl = gsap.timeline({
          // onComplete: () => {
          //   // goDown();
          // },
        });

        tl.fromTo(".target-y-axis", { y: "100%" }, { y: 0 });
      });
      return () => {
        ctx.revert(); // cleanup
        testCtx.current.revert();
      };
    }, [dataArray]);

    useImperativeHandle(ref, () => {
      return {
        doSomething: (x, y) => {},
        removeElement: (x, y) => {
          if (x === "nextSlide") {
            // alert("aaa");
            testCtx.current.removeNext();
          } else {
            testCtx.current.removePrev();
          }
        },
      };
    });
    return (
      <div ref={el} className=" w-100 h-100 flex-1  ">
        {children}
      </div>
    );
  }
);
export default AnimationControl;
