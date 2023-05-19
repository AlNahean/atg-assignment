import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";

import { useGlobalContext } from "../../../../Context";

const ulData = [
  { id: 1, title: "Posts", count: "32" },
  { id: 2, title: "Article", count: "" },
  { id: 3, title: "Event", count: "" },
  { id: 4, title: "Education", count: "" },
  { id: 5, title: "Job", count: "" },
];
const PageHeader = () => {
  const { showRegisterModal, setShowRegisterModal } = useGlobalContext();
  return (
    <div className=" page-header-wrapper w-100 ">
      <div className=" container px-0 mx-auto d-flex justify-content-between border-bottom border-2 px-2 px-md-0">
        <div className=" center d-md-none fw-bold  py-3 ">Posts(32)</div>

        <div className="center d-md-none">
          <div className=" btn  btn-secondary d-flex align-items-center gap-2 ">
            <p className=" mb-0">Filter: All</p>
            <div className=" center">
              <AiFillCaretDown />
            </div>
          </div>
        </div>

        <div className=" d-none d-md-flex ">
          {ulData.map((item, i) => {
            return (
              <>
                <div
                  className={
                    i === 0
                      ? " px-4 py-2  center fw-bold text-black border-bottom border-dark"
                      : "px-4 py-2  center fw-bold text-secondary"
                  }
                  style={{
                    transform: "translateY(2px)",
                  }}
                >
                  {item.title}
                  {item.count && `(${item.count})`}
                </div>
              </>
            );
          })}
        </div>
        <div className=" d-none d-lg-flex align-items-center gap-2 py-2 ">
          <div className=" btn btn-secondary d-flex align-items-center gap-2">
            <p className=" mb-0">Write a Post</p>
            <div className=" center">
              <AiFillCaretDown />
            </div>
          </div>
          <div className=" btn btn-primary d-flex align-items-center gap-2">
            <div className=" center">
              <MdPersonAddAlt1 />
            </div>
            <p className=" mb-0">Join a Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
