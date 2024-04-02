import React, { FC, useRef, useState } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import "./ColorSelector.scss";

type ColorSelectorProps = {
  value: string;
  selectedValue: string;
  group: string;
  addClass?: string;
  type?: "default" | "disabled";
  size?: "medium" | "big";
  getRadioValue?: (value: string) => void;
  field?: RegisterOptions<FieldValues>;
};

const ColorSelector: FC<ColorSelectorProps> = ({
  value,
  selectedValue,
  group,
  addClass,
  field,
  type = "default",
  size = "medium",
  getRadioValue = () => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    getRadioValue(inputRef.current.value);
  };

  return (
    <div className={`radio__container colorSelector ${type} ${size} ${addClass ? addClass : ""}`}>
      <input
        type="checkbox"
        id={value}
        name={group}
        value={value}
        checked={selectedValue === value}
        disabled={type === "disabled"}
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
        style={{ backgroundColor: value }}
      />
    </div>
  );
};

export default ColorSelector;
