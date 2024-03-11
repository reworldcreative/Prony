import React, { ChangeEvent, FC, useContext, useRef, useState } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import "./Switch.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

type SwitchProps = {
  labelText: string;
  value: string;
  name: string;
  addClass?: string;
  type?: "default" | "secondary" | "disabled";
  size?: "medium" | "big";
  getSwitchValue?: (value: boolean) => void;
  field?: RegisterOptions<FieldValues>;
  defaultChecked?: boolean;
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
  defaultChecked,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = useContext(GlobalContext);

  const handleChange = () => {
    getSwitchValue(inputRef.current.checked);
  };

  return (
    <div className={`switch__container ${type} ${size} ${addClass ? addClass : ""}`}>
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
      <div className="switch__block">
        <label className={`switch ${theme.theme}`} htmlFor={value} />
        <label className={`switch__label text ${size === "big" ? "heading-h6" : ""}`} htmlFor={value}>
          {labelText}
        </label>
      </div>
    </div>
  );
};

export default Switch;
