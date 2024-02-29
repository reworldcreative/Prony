import React, { FC, useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import "../Input/Input.scss";
import "./TextArea.scss";

interface TextAreaProps {
  label?: string;
  name: string;
  rows?: number;
  getValue?: (value: string) => void;
  messageType?: "error" | "success" | "";
  messageText?: string;
  register: UseFormRegister<FieldValues>;
  settings?: RegisterOptions<FieldValues>;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  rows = 3,
  settings,
  register,
  messageType,
  messageText,
}) => {
  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label text" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`input textArea text ${
          messageType ? `input_${messageType}` : ""
        }`}
        id={name}
        {...register(name, settings)}
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

export default TextArea;
