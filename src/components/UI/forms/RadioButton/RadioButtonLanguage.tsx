import React, { FC, useRef, useState } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import "./RadioButton.scss";

type RadioButtonLanguageProps = {
  labelIcon: string;
  value: string;
  text: string;
  selectedValue: string;
  group: string;
  addClass?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getRadioValue?: (value: string) => void;
  field?: RegisterOptions<FieldValues>;
};

const RadioButtonLanguage: FC<RadioButtonLanguageProps> = ({
  labelIcon,
  value,
  text,
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
    <div className={`radio__container radio-language ${type} ${size} ${addClass ? addClass : ""}`}>
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
      <label htmlFor={value} className={`radio-label radio-language__label`}>
        <div className="radio-language__text-container">
          <p className="radio-language__caption subtitle-second">{value}</p>
          <p className="radio-language__text caption">{text}</p>
        </div>

        <img className="radio__icon" src={labelIcon} alt="country flag" width="30" height="20" aria-hidden="true" />
      </label>
    </div>
  );
};

export default RadioButtonLanguage;
