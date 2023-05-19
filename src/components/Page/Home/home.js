import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../Context";
import Header from "../Shared/Header/Header";
import "./Home.scss";
import PageHeader from "./Components/PageHeader/PageHeader";
import RegisterModal from "../Shared/RegisterModal/RegisterModal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcaseFill, BsFillPencilFill } from "react-icons/bs";

import { BsFillEyeFill, BsFillCalendarDateFill } from "react-icons/bs";

import { AiFillEye, AiOutlineShareAlt } from "react-icons/ai";

import { ImLocation } from "react-icons/im";

import { GoPlus } from "react-icons/go";

const postsData = [
  {
    id: 1,
    img: "/images/Rectangle 5.png",
    type: "✍️ Article",
    typeIcon: <AiOutlineInfoCircle />,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userName: "Sarthak Kamra",
    userImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  },
  {
    id: 2,
    img: "/images/Rectangle 5 (1).png",

    type: "🔬️ Education",
    typeIcon: <AiOutlineInfoCircle />,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userName: "Sarah West",
    userImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  },

  {
    id: 4,
    img: "/images/Rectangle 5 (2).png",

    type: "🗓️ Meetup",
    typeIcon: <AiOutlineInfoCircle />,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userName: "Ronal Jones",
    userImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    meetupDate: "Fri, 12 Oct, 2018",
    meetupPlace: "Ahmedabad, India",
  },
  {
    id: 5,
    img: "/images/Rectangle 5.png",

    type: "💼️ Job",
    typeIcon: <AiOutlineInfoCircle />,
    title: "Software Developer",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userName: "Joseph Gray",
    userImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    companyName: "Innovaccer Analytics Private Ltd.",
    companyPlace: "Noida, India",
  },
];

const Home = () => {
  const { test, showRegisterModal, setShowRegisterModal } = useGlobalContext();

  return (
    <>
      <RegisterModal />

      <div className=" text-black">
        <Header />

        <HeroHeader />
        <PageHeader />

        <MainContent />

        {!showRegisterModal && (
          <div
            className=" d-md-none  bg-primary rounded-circle center text-white"
            style={{
              height: "3.5rem",
              width: "3.5rem",
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              fontSize: "2rem",
            }}
            onClick={() => {
              setShowRegisterModal(true);
            }}
          >
            <GoPlus />
          </div>
        )}
      </div>
    </>
  );
};
const MainContent = () => {
  return (
    <div className=" row container w-100 mx-auto mt-4 px-0">
      <div className=" col-12 col-lg-9">
        <div className=" d-flex flex-column gap-2">
          {/**************************************************************************
           **********************************Card 1**********************************
           * ************************************************************************/}
          {postsData.map((item) => {
            return (
              <>
                <div className=" card">
                  {item.type !== "💼️ Job" && (
                    <img
                      src={item.img}
                      alt=""
                      srcset=""
                      className=" card-img-top custom-card-img-style"
                    />
                  )}
                  <div className=" card-body">
                    <div className=" d-flex align-items-center">
                      <div className=" center">
                        {/* <div
                        style={{ fontSize: "1.3rem" }}
                        className=" center"
                      >
                        {item.typeIcon}
                      </div> */}
                        <h6 className=" mb-2">{item.type}</h6>
                      </div>
                    </div>
                    <h4>{item.title}</h4>
                    {/* Descreption */}
                    {item.type === "🔬️ Education" && (
                      <p className="p text-secondary">{item.desc}</p>
                    )}
                    {item.type === "✍️ Article" && (
                      <p className="p text-secondary">{item.desc}</p>
                    )}
                    {/* Meetup */}
                    {item.type === "🗓️ Meetup" && (
                      <>
                        <div className=" d-flex gap-2 align-items-center my-3">
                          <div className=" d-flex gap-2 flex-1">
                            <div className=" center">
                              <BsFillCalendarDateFill />
                            </div>
                            <div>{item.meetupDate}</div>
                          </div>
                          <div className=" d-flex gap-2 flex-1">
                            <div className=" center">
                              <ImLocation />
                            </div>
                            <div>{item.meetupPlace}</div>
                          </div>
                        </div>

                        <div className=" btn btn-outline-dark w-100 my-3 text-danger py-2 btn-outline-hover">
                          Visit Website
                        </div>
                      </>
                    )}
                    {/* Job */}
                    {item.type === "💼️ Job" && (
                      <>
                        <div className=" d-flex gap-2 align-items-center my-3">
                          <div className=" d-flex gap-2 flex-1">
                            <div className=" center">
                              <BsBriefcaseFill />
                            </div>
                            <div>{item.companyName}</div>
                          </div>
                          <div className=" d-flex gap-2 flex-1">
                            <div className=" center">
                              <ImLocation />
                            </div>
                            <div>{item.companyPlace}</div>
                          </div>
                        </div>

                        <div className=" btn btn-outline-dark w-100 my-3 text-success py-2 btn-outline-hover">
                          Visit Website
                        </div>
                      </>
                    )}

                    <div className=" d-flex align-items-center justify-content-between my-3">
                      <div className=" center gap-2">
                        <img
                          src={item.userImage}
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          alt="Avatar"
                        />
                        <h5 className=" mb-0">{item.userName}</h5>
                      </div>

                      <div className=" center gap-4">
                        <div className=" center gap-2">
                          <div
                            style={{ fontSize: "1.5rem" }}
                            className=" center"
                          >
                            <AiFillEye />
                          </div>
                          <p className=" mb-0">1.4k views</p>
                        </div>

                        <div
                          className=" btn btn-secondary center"
                          style={{ fontSize: "1.8rem" }}
                        >
                          <AiOutlineShareAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className=" col-12 col-lg-3  ">
        <div className=" d-flex align-items-center border-bottom ">
          <div>
            <ImLocation />
          </div>
          <div style={{ flex: "1" }} className=" ">
            <input
              type="text"
              aria-label="First name"
              className="form-control border-0"
              placeholder="Enter your location"
            />
          </div>
          <div>
            <BsFillPencilFill />
          </div>
        </div>
        <div className=" d-flex gap-4 mt-4 align-items-center">
          <div
            className=""
            style={{ fontSize: "1.9rem", transform: "translateY(-10%)" }}
          >
            <AiOutlineInfoCircle />
          </div>
          <p className=" mb-0">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};
const HeroHeader = () => {
  return (
    <div className=" hero-header position-relative">
      <img
        src="/images/Rectangle 2.png"
        srcset=""
        className=" hero-image-img "
      />
      <div className=" img-overlay"></div>
      <div className=" text-container class-name text-white w-100 ">
        <div className=" container mx-auto ">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

const EyeSvg = () => {
  return (
    <svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
        fill="#525252"
      />
    </svg>
  );
};
