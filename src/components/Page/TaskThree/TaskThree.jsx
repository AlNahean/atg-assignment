import React, { Suspense, useEffect, useState } from "react";
import "./TaskThree.scss";
import axios from "axios";
const TaskThree = () => {
  const [ulData, setUsData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setIsLoading] = useState(true);

  const getUsers = async () => {
    setIsLoading(true);
    let response = await axios.get(
      "https://602e7c2c4410730017c50b9d.mockapi.io/users"
    );
    if (response.status === 200) {
      setUsData(response.data);
      setCurrentUser(response.data[0]);
    } else {
      alert("failed to fetch data");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  const handleUserCard = (user) => {
    setCurrentUser(user);
  };
  const addImageFallback = (event) => {
    event.currentTarget.src =
      "illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp";
  };

  return (
    <div className=" task-three-wrapper body-bg text-white">
      {/* Loader */}
      {loading && (
        <div className=" h-100 w-100 center" style={{ minHeight: "100vh" }}>
          <div className="lds-facebook">
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      {/* Main Ul */}
      {!loading && (
        <div className=" container d-flex h-100 align-items-center">
          {/* Check if array is Empty */}
          {ulData.length > 0 ? (
            <div className=" row  flex-1 py-5 ">
              <div className=" col-12 col-md-6 order-1 order-md-0 mb-3">
                <div className=" card bg-transparent">
                  <div className=" card-header bg-primary d-flex justify-content-center ">
                    <h2 className=" text-uppercase mb-0">User List</h2>
                  </div>
                  <div
                    className=" card-body bg-dark d-flex flex-column no-scrollbar"
                    style={{
                      maxHeight: "80vh",
                      overflowY: "scroll",
                    }}
                  >
                    {ulData.map((item, index) => {
                      return (
                        <div key={index} className=" my-2">
                          <div
                            className=" d-flex bg-secondary px-3 p-2 rounded-2 gap-3  bg-opacity-25"
                            onClick={() => {
                              handleUserCard(item);
                            }}
                          >
                            <div
                              className=" rounded-circle avatar-md avatar-bg-img"
                              // style={{
                              //   backgroundImage:
                              //     "url(illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp)",
                              // }}
                            >
                              <img
                                onError={addImageFallback}
                                src={item.avatar}
                                alt=""
                                className=" rounded-circle avatar-md"
                              />
                            </div>
                            <div className=" center">
                              <h4 className=" mb-0">{item.profile.username}</h4>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 order-0 order-md-1 mb-3">
                <div className=" card bg-transparent">
                  <div className=" card-header bg-primary ">
                    <h2 className=" text-center text-uppercase mb-0">
                      User Details
                    </h2>
                  </div>
                  <div className=" card-body bg-dark">
                    {/* Avatar */}
                    <div className=" d-flex justify-content-center my-3">
                      <div
                        className=" avatar-lg rounded-circle avatar-bg-img"
                        style={{
                          backgroundColor: "red",
                          backgroundImage:
                            "url(illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp)",
                        }}
                      >
                        <img
                          onError={addImageFallback}
                          src={currentUser.avatar}
                          alt=""
                          className=" rounded-circle avatar-lg"
                        />
                      </div>
                    </div>
                    {/* @UserName */}
                    <div className=" d-flex justify-content-center my-3">
                      <h5 className=" mb-0">
                        @{currentUser?.profile?.username}
                      </h5>
                    </div>
                    <div className=" my-2 bg-secondary bg-opacity-25 p-2 rounded-3 my-3">
                      <p className=" mb-0">{currentUser?.Bio}</p>
                    </div>
                    {/* Fullname */}
                    <div className=" d-flex flex-column my-3 ">
                      <p className=" mb-1">Full Name</p>
                      <div className="  bg-secondary bg-opacity-25 p-2 rounded-3">
                        <p className=" mb-0">
                          {currentUser?.profile?.firstName}{" "}
                          {currentUser?.profile?.lastName}
                        </p>
                      </div>
                    </div>
                    {/* Job Title */}
                    <div className=" d-flex flex-column my-3 ">
                      <p className=" mb-1">Job Title</p>
                      <div className="  bg-secondary bg-opacity-25 p-2 rounded-3">
                        <p className=" mb-0">{currentUser?.jobTitle}</p>
                      </div>
                    </div>
                    {/* Email */}
                    <div className=" d-flex flex-column my-3 ">
                      <p className=" mb-1">Email</p>
                      <div className="  bg-secondary bg-opacity-25 p-2 rounded-3">
                        <p className=" mb-0">{currentUser?.profile?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className=" h-100 w-100 center"
              style={{
                minHeight: "100vh",
              }}
            >
              <h5 className=" text-white">No data to show</h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskThree;
