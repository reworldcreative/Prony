import React, { ChangeEvent, FC, useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import "./Input.scss";

interface InputProps {
  label?: string;
  name: string;
  getValue?: (value: string) => void;
  messageType?: "error" | "success" | "";
  messageText?: string;
  register?: UseFormRegister<FieldValues>;
  settings?: RegisterOptions<FieldValues>;
}

const Input: FC<InputProps> = ({
  label,
  name,
  settings,
  register,
  messageType,
  messageText,
  getValue,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (getValue) {
      getValue(newValue);
    }
  };

  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label text" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={`input text ${messageType ? `input_${messageType}` : ""}`}
        id={name}
        {...(register ? register(name, settings) : { onChange: handleChange })}
      />
      {messageType !== "" && messageText !== "" && (
        <p
          className={`input__message text ${
            messageType ? `input__message_${messageType}` : ""
          }`}
        >
          {messageText}
        </p>
      )}
    </div>
  );
};

export default Input;
