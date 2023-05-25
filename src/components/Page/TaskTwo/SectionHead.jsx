import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const SectionHead = ({ data }) => {
  return (
    <div
      className=" h-100 w-100  d-flex flex-column justify-content-end px-5 text-white"
      style={{
        backgroundColor: data.primaryColor,
      }}
    >
      {data.award && (
        <div
          className=" w-50 position-relative overflow-hidden"
          style={{ maxHeight: "15vh" }}
        >
          <img src={data.award} alt="" className=" w-100 target-y-axis" />
        </div>
      )}
      <div
        className=" position-relative overflow-hidden  fw-bold my-3 "
        style={{
          maxHeight: "8rem",

          fontSize: "4rem",
        }}
      >
        <h1
          className="target-y-axis"
          style={{
            fontSize: "4rem",
          }}
        >
          {data.title}
        </h1>
      </div>
      <div
        className=" position-relative overflow-hidden   my-3 "
        style={{
          maxHeight: "8rem",
          // backgroundColor: "red",
          fontSize: "1.2rem",
          maxWidth: "300px",
        }}
      >
        <p className="target-y-axis">{data.descreption}</p>
      </div>
      <div className=" d-flex justify-content-between align-items-center">
        <div
          className=" position-relative overflow-hidden   my-3 "
          style={{
            maxHeight: "8rem",
            // backgroundColor: "red",
            fontSize: "1.2rem",
            maxWidth: "300px",
          }}
        >
          {!data.caseStudy ? (
            <h6
              className="  target-y-axis opacity-50"
              style={{ fontSize: "1.4rem" }}
            >
              Coming Soon
            </h6>
          ) : (
            <h6
              className=" center  target-y-axis gap-4"
              style={{ fontSize: "1.4rem" }}
            >
              <div>View Case Study</div>
              <div
                style={{
                  fontSize: "3rem",
                  color: "white",
                  transform: "translateY(-4%)",
                }}
              >
                <IoIosArrowRoundForward />
              </div>
            </h6>
          )}
        </div>
        <div
          className=" center position-relative overflow-hidden   my-3 "
          style={{
            maxHeight: "8rem",
            // backgroundColor: "red",
            fontSize: "1.2rem",
            maxWidth: "300px",
          }}
        >
          <p
            className=" display-6  target-y-axis cursor-pointer"
            style={{ fontSize: "1.9rem", letterSpacing: "0.4rem" }}
          >
            Skip
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
