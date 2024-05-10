import React, { FC } from "react";
import "./Info.scss";
import SuccessIcon from "@/assets/img/icons/success.svg";
import InfoIcon from "@/assets/img/icons/info.svg";

interface InfoProps {
  type: "success" | "danger";
  text: string;
  visible: boolean;
}

const Info: FC<InfoProps> = ({ type, text, visible }) => {
  return (
    <div
      className={`info ${type === "success" ? "info_success" : "info_danger"} ${visible ? "info_visible" : ""}`}
      aria-live="assertive"
    >
      <img
        src={type === "success" ? SuccessIcon : InfoIcon}
        className="info__icon"
        alt="info icon"
        width="24"
        height="24"
        aria-hidden="true"
        loading="lazy"
      />
      <p className="info__text text">{text}</p>
    </div>
  );
};

export default Info;
