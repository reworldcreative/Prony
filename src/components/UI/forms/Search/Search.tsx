import React, { ChangeEvent, FC } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import "./Search.scss";
import searchIcon from "@/assets/img/icons/search.svg";

interface InputProps {
  name: string;
  getValue?: (value: string) => void;
  value?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  settings?: RegisterOptions<FieldValues>;
  addClass?: string;
}

const Search: FC<InputProps> = ({ name, settings, register, getValue, value, placeholder, addClass }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (getValue) {
      getValue(newValue);
    }
  };

  return (
    <div className={`search__wrapper ${addClass}`}>
      <input
        className={`search text`}
        id={name}
        {...(register ? register(name, settings) : { onChange: handleChange })}
        defaultValue={value}
        placeholder={placeholder}
      />
      <button className="search__button" aria-label="search">
        <img src={searchIcon} alt="search icon" width="17" height="17" aria-hidden="true" loading="lazy" />
      </button>
    </div>
  );
};

export default Search;
