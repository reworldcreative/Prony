import React, { FC, MouseEvent, useRef } from "react";
import "./OptionButton.scss";
const OptionButton: FC<{
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
}> = ({ click, buttonRef, label }) => {
  return (
    <button
      className="optionButton"
      aria-label={`click to ${label} more option`}
      onClick={click}
      ref={buttonRef}
    >
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </button>
  );
};

export default OptionButton;
