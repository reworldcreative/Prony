import React, { FC, useRef, useState } from "react";
import "./RadioButton.scss";

type RadioButtonProps = {
  labelText: string;
  value: string;
  selectedValue: string;
  group: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getRadioValue?: (value: string) => void;
};

const RadioButton: FC<RadioButtonProps> = ({
  labelText,
  value,
  selectedValue,
  group,
  type = "default",
  size = "medium",
  getRadioValue = () => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    getRadioValue(inputRef.current.value);
  };

  return (
    <div className={`radio__container ${type} ${size}`}>
      <input
        type="checkbox"
        id={value}
        name={group}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
        tabIndex={type === "disabled" ? -1 : 0}
        ref={inputRef}
      />
      <label htmlFor={value} className="radio-label text">
        {labelText}
      </label>
    </div>
  );
};

export default RadioButton;
