import React, { FC, ReactNode, MouseEvent } from "react";
import "./Button.scss";

const Button: FC<{
  children: ReactNode;
  type: "default" | "primary" | "danger";
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, type, click }) => {
  return (
    <button
      className={`button ${
        type ? "button_" + type : ""
      } subtitle-second ${type}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
