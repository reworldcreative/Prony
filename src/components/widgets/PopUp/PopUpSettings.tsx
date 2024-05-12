import React, { FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import "./PopUp.scss";
import closeIcon from "@/assets/img/icons/close.svg";
import { GlobalContext } from "../GlobalContext/GlobalContext";

interface PopUpSettingsProps {
  children: ReactNode;
  addClass?: string;
}

const rootElement = document.getElementById("root");

const PopUpSettings: FC<PopUpSettingsProps> = ({ children, addClass }) => {
  const { theme, setTheme, isOpenPopUp, setOpenPopUp, isOpenPopUpSettings, setOpenPopUpSettings } =
    useContext(GlobalContext);

  const popUpRef = useRef(null);
  const popUpCloseButtonRef = useRef(null);

  useEffect(() => {
    popUpRef.current.focus();
  }, [isOpenPopUpSettings]);

  const togglePopup = () => {
    setOpenPopUpSettings(!isOpenPopUpSettings);
  };

  useEffect(() => {
    setTimeout(() => {
      isOpenPopUpSettings ? rootElement.classList.add("scroll-lock") : rootElement.classList.remove("scroll-lock");
    }, 10);

    return () => {
      rootElement.classList.remove("scroll-lock");
    };
  }, [isOpenPopUpSettings]);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab" && !event.shiftKey && popUpRef.current) {
      event.preventDefault();
      popUpRef.current.focus();
    }
  };

  return (
    <div className={`popUp ${isOpenPopUpSettings ? "popUp_open" : ""}`}>
      <div className={`popUp__container ${addClass ? addClass : ""}`} ref={popUpRef} tabIndex={0} aria-live="assertive">
        {children}
        <button
          className="popUp__close"
          aria-label="close pop-up"
          onClick={togglePopup}
          ref={popUpCloseButtonRef}
          onKeyDown={handleTabKeyDown}
        >
          <img
            src={closeIcon}
            className={`popUp__closeIcon popUp__closeIcon_${theme}`}
            alt="close icon"
            width="24"
            height="24"
            aria-hidden="true"
            loading="lazy"
          />
        </button>
      </div>
      <div className="popUp__BG" onClick={togglePopup}></div>
    </div>
  );
};

export default PopUpSettings;
