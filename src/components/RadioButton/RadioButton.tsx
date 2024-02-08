import React, { FC } from "react";
import "./radioButton.scss";

type RadioButtonProps = {
  labelText: string;
  value: string;
  defaultChecked?: boolean;
  group: string;
  // type?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
};

const RadioButton: FC<RadioButtonProps> = ({
  labelText,
  value,
  defaultChecked,
  group,
  type = "default",
  size = "medium",
}) => {
  return (
    <div className={`radio__container ${type} ${size}`}>
      <input
        type="radio"
        id={value}
        name={group}
        value={value}
        defaultChecked={defaultChecked ? true : false}
      />
      <label htmlFor={value} className="radio-label text">
        {labelText}
      </label>
    </div>
  );
};

export default RadioButton;
