import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import "./PopUp.scss";
import closeIcon from "@/assets/img/icons/close.svg";
import { GlobalContext } from "../GlobalContext/GlobalContext";

interface PopUpProps {
  children: ReactNode;
}

const rootElement = document.getElementById("root");

const PopUp: FC<PopUpProps> = ({ children }) => {
  const { theme, setTheme, isOpenPopUp, setOpenPopUp } =
    useContext(GlobalContext);

  const togglePopup = () => {
    setOpenPopUp(!isOpenPopUp);
  };

  useEffect(() => {
    isOpenPopUp
      ? rootElement.classList.add("scroll-lock")
      : rootElement.classList.remove("scroll-lock");

    return () => {
      rootElement.classList.remove("scroll-lock");
    };
  }, [isOpenPopUp]);

  return (
    <div className={`popUp ${isOpenPopUp ? "popUp_open" : ""}`}>
      <div className="popUp__container">
        {children}
        <button
          className="popUp__close"
          aria-label="close pop-up"
          onClick={togglePopup}
        >
          <img
            src={closeIcon}
            className={`popUp__closeIcon popUp__closeIcon_${theme}`}
            alt="close icon"
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="popUp__BG" onClick={togglePopup}></div>
    </div>
  );
};

export default PopUp;
