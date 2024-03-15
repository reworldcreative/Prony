import React, { FC, useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface CheckboxBlockProps {
  getValue: (value: string[]) => void;
  defaultValue?: string[];
  options: { name: string; labelText: string }[];
}

interface ValueObject {
  key: string;
  value: boolean;
}

const CheckboxBlock: FC<CheckboxBlockProps> = ({ getValue, defaultValue, options }) => {
  const [values, setValues] = useState<ValueObject[]>([]);

  const handleGetValue = (value: boolean, key: string) => {
    const existingIndex = values.findIndex((item) => item.key === key);

    if (existingIndex !== -1) {
      if (value === false) {
        setValues((prevValues) => {
          const newValues = [...prevValues];
          newValues.splice(existingIndex, 1);
          return newValues;
        });
      } else {
        setValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[existingIndex] = { ...newValues[existingIndex], value };
          return newValues;
        });
      }
    } else {
      setValues((prevValues) => [...prevValues, { key, value }]);
    }
  };

  useEffect(() => {
    getValue(values.map((item) => item.key));
  }, [values]);

  useEffect(() => {
    setValues([]);
    defaultValue.map((option) => handleGetValue(true, option));
  }, [options]);

  return (
    <>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          name={option.name}
          labelText={option.labelText}
          value={option.labelText}
          size="big"
          type="secondary"
          getCheckboxValue={(value) => handleGetValue(value, option.labelText)}
          checked={values.map((obj) => obj.key).includes(option.labelText)}
        />
      ))}
    </>
  );
};

export default CheckboxBlock;
