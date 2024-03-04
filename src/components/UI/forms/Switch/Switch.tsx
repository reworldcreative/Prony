import React, { FC, useRef, useState } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import "./Switch.scss";

type SwitchProps = {
  labelText: string;
  value: string;
  name: string;
  addClass?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getSwitchValue?: (value: boolean) => void;
  field?: RegisterOptions<FieldValues>;
};

const Switch: FC<SwitchProps> = ({
  labelText,
  value,
  name,
  addClass,
  field,
  type = "default",
  size = "medium",
  getSwitchValue = () => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    getSwitchValue(inputRef.current.checked);
  };

  return (
    <div
      className={`switch__container ${type} ${size} ${
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
        {...(field
          ? {
              onChange: (e) => {
                field.onChange(e.target.checked);
              },
            }
          : { onChange: handleChange, ref: inputRef })}
      />
      <label className="switch__block" htmlFor={value}>
        <div className="switch" />
        <p
          className={`switch__label text ${size === "big" ? "heading-h6" : ""}`}
        >
          {labelText}
        </p>
      </label>
    </div>
  );
};

export default Switch;
