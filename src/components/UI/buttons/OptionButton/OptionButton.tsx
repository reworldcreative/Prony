import React, { FC, MouseEvent, useRef } from "react";
import "./OptionButton.scss";
const OptionButton: FC<{
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  addClass?: string;
  title?: string;
}> = ({ click, buttonRef, label, addClass, title }) => {
  return (
    <button
      title={title ? title : ""}
      className={`optionButton ${addClass}`}
      aria-label={`click to ${label} more option`}
      onClick={click}
      ref={buttonRef}
      aria-haspopup="true"
      // aria-expanded="false"
    >
      <span className="dot optionButton__dot" />
      <span className="dot optionButton__dot" />
      <span className="dot optionButton__dot" />
    </button>
  );
};

export default OptionButton;
