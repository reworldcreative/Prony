import React, { FC, ReactNode } from "react";
import "./Button.scss";

const Button: FC<{
  children: ReactNode;
  type: "default" | "primary" | "danger";
}> = ({ children, type }) => {
  return (
    <button
      className={`button ${
        type ? "button_" + type : ""
      } subtitle-second ${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
