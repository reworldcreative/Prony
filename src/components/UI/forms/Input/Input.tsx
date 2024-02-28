import React, { FC, useState } from "react";
import "./Input.scss";
interface InputProps {
  label?: string;
  id: string;
  getValue?: (value: string) => void;
  messageType?: "error" | "success";
  messageText?: string;
}

const Input: FC<InputProps> = ({
  label,
  id,
  getValue,
  messageType,
  messageText,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // getValue(newValue);
  };

  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label text" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`input text ${messageType ? `input_${messageType}` : ""}`}
        id={id}
        value={inputValue}
        onChange={handleInputChange}
      />
      {messageType === "error" && (
        <p
          className={`input__message text ${
            messageType ? `input__message_${messageType}` : ""
          }`}
        >
          Board name should be unique
        </p>
      )}
    </div>
  );
};

export default Input;
