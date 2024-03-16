import React, { FC, ReactNode, MouseEvent } from "react";
import "./Button.scss";

const Button: FC<{
  children: ReactNode;
  type: "default" | "primary" | "danger";
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "button" | "submit";
  disabled?: boolean;
  addClass?: string;
}> = ({
  children,
  type,
  click,
  buttonType = "button",
  disabled = false,
  addClass,
}) => {
  return (
    <button
      className={`button ${
        type ? "button_" + type : ""
      } subtitle-second ${type} ${
        disabled ? "button_disabled" : ""
      } ${addClass}`}
      onClick={click}
      type={buttonType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
