import React, { FC, useRef, useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import "./RadioButton.scss";

type RadioButtonProps = {
  labelText: string;
  value: string;
  selectedValue: string;
  group: string;
  addClass?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getRadioValue?: (value: string) => void;
  register?: UseFormRegister<FieldValues>;
  field?: RegisterOptions<FieldValues>;
};

const RadioButton: FC<RadioButtonProps> = ({
  labelText,
  value,
  selectedValue,
  group,
  addClass,
  field,
  type = "default",
  size = "medium",
  getRadioValue = () => {},
  register,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    getRadioValue(inputRef.current.value);
  };

  return (
    <div
      className={`radio__container ${type} ${size} ${addClass ? addClass : ""}`}
    >
      <input
        type="checkbox"
        id={value}
        name={group}
        value={value}
        checked={selectedValue === value}
        // onChange={handleChange}
        // ref={inputRef}
        tabIndex={type === "disabled" ? -1 : 0}
        {...(field
          ? {
              onChange: (e) => {
                field.onChange(e.target.value);
              },
            }
          : { onChange: handleChange, ref: inputRef })}
      />
      <label
        htmlFor={value}
        className={`radio-label text ${size === "big" ? "heading-h6" : ""}`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default RadioButton;
