import React, { useState } from "react";
import { useGlobalContext } from "../../../Context";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./RegisterModal.scss";

const RegisterModal = () => {
  const { showRegisterModal, setShowRegisterModal } = useGlobalContext();
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleRegisterModal = () => {
    setIsSignUp((state) => !state);
  };
  return (
    <>
      {showRegisterModal && (
        <div
          className=" position-fixed fixed-top d-flex  flex-column justify-content-end justify-content-md-center"
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "1000",
          }}
        >
          <div
            className=" container position-relative   px-0  "
            style={{ maxWidth: "800px" }}
          >
            <div className="">
              {isSignUp ? (
                <SignUp
                  setIsSignUp={setIsSignUp}
                  toggleRegisterModal={toggleRegisterModal}
                />
              ) : (
                <SignIn
                  setIsSignUp={setIsSignUp}
                  toggleRegisterModal={toggleRegisterModal}
                />
              )}
            </div>
            <div
              className=" btn btn-secondary rounded-circle center d-none d-md-flex register-modal "
              onClick={() => {
                setShowRegisterModal(false);
              }}
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
