import React, { FC, useRef, useState } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import "./Checkbox.scss";

type CheckboxProps = {
  labelText: string;
  value: string;
  name: string;
  addClass?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getCheckboxValue?: (value: boolean) => void;
  field?: RegisterOptions<FieldValues>;
  defaultChecked?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  labelText,
  value,
  name,
  addClass,
  field,
  type = "default",
  size = "medium",
  getCheckboxValue = () => {},
  defaultChecked,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    getCheckboxValue(inputRef.current.checked);
  };
  return (
    <div
      className={`checkbox__container ${type} ${size} ${
        addClass ? addClass : ""
      }`}
    >
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        disabled={type === "disabled"}
        tabIndex={type === "disabled" ? -1 : 0}
        defaultChecked={defaultChecked}
        {...(field
          ? {
              onChange: (e) => {
                field.onChange(e.target.checked);
              },
            }
          : { onChange: handleChange, ref: inputRef })}
      />
      <label
        htmlFor={value}
        className={`checkbox__label text ${size === "big" ? "heading-h6" : ""}`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default Checkbox;
