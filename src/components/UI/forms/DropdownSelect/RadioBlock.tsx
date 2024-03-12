import React, { FC, useEffect, useState } from "react";
import RadioButton from "../RadioButton/RadioButton";

interface RadioProps {
  getValue: (value: string) => void;
  defaultValue?: string;
  group: string;
  options: { value: string; labelText: string }[];
}
const RadioBlock: FC<RadioProps> = ({ getValue, defaultValue, options, group }) => {
  const [value, setValue] = useState(defaultValue);
  const handleGetValue = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          group={group}
          labelText={option.labelText}
          value={option.value}
          size="big"
          type="secondary"
          getRadioValue={handleGetValue}
          selectedValue={value}
        />
      ))}
    </>
  );
};

export default RadioBlock;
