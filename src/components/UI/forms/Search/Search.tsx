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
}

const Search: FC<InputProps> = ({
  name,
  settings,
  register,
  getValue,
  value,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (getValue) {
      getValue(newValue);
    }
  };

  return (
    <div className={`search__wrapper`}>
        <input
          className={`search text`}
          id={name}
          {...(register ? register(name, settings) : { onChange: handleChange })}
          defaultValue={value}
          placeholder={placeholder}
        />
        <button className="search__button">
        <img src={searchIcon} alt="search icon" width="17" height="17" aria-hidden="true" />
        </button>
    </div>
  );
};

export default Search;
