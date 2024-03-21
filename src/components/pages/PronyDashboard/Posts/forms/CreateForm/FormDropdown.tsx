import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import React, { FC, useState } from "react";

interface FormDropdownProps {
  options: string[];
  required: boolean;
  name: string;
  current: string;
  onSelect?: (value: string) => void;
}

const FormDropdown: FC<FormDropdownProps> = ({ options, required, name, current, onSelect }) => {
  const [isEmpty, setIsEmpty] = useState(current === "");

  const selectValue = (value: string) => {
    setIsEmpty(false);
    onSelect(value);
  };

  return (
    <div className="input__wrapper">
      <label className="input__label text">
        {name} {required && <span className="input__label_required">*</span>}
      </label>

      <Dropdown current={current} onSelect={selectValue} options={options} />

      {isEmpty && required && <p className={`input__message text`}>must be choose</p>}
    </div>
  );
};

export default FormDropdown;
