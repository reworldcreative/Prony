import React, { ChangeEvent, FC, useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import "./Input.scss";
// import { IconButton } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

const IconButton = React.lazy(async () => {
  const module = await import("@mui/material");
  return { default: module["IconButton"] };
});

const Visibility = React.lazy(async () => {
  const module = await import("@mui/icons-material");
  return { default: module["Visibility"] };
});

const VisibilityOff = React.lazy(async () => {
  const module = await import("@mui/icons-material");
  return { default: module["VisibilityOff"] };
});

interface InputProps {
  label?: string;
  name: string;
  getValue?: (value: string) => void;
  value?: string;
  placeholder?: string;
  messageType?: "error" | "success" | "";
  type?: "text" | "password";
  messageText?: string;
  register?: UseFormRegister<FieldValues>;
  settings?: RegisterOptions<FieldValues>;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  name,
  settings,
  register,
  messageType,
  type = "text",
  messageText,
  getValue,
  value,
  placeholder,
  required,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (getValue) {
      getValue(newValue);
    }
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label text" htmlFor={name}>
          {label} {required && <span className="input__label_required">*</span>}
        </label>
      )}

      <div className={`input__container ${type === "password" ? "password" : ""}`}>
        <input
          className={`input text ${messageType ? `input_${messageType}` : ""}`}
          id={name}
          {...(register ? register(name, settings) : { onChange: handleChange })}
          defaultValue={value}
          placeholder={placeholder}
          type={type === "text" ? "text" : showPassword ? "text" : "password"}
        />

        {type === "password" && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
            className={`input__icon-button`}
          >
            {showPassword ? (
              <VisibilityOff className={`input__icon`} width="16" height="16" />
            ) : (
              <Visibility className={`input__icon`} width="16" height="16" />
            )}
          </IconButton>
        )}
      </div>

      {messageType !== "" && messageText !== "" && (
        <p className={`input__message text ${messageType ? `input__message_${messageType}` : ""}`}>{messageText}</p>
      )}
    </div>
  );
};

export default Input;
