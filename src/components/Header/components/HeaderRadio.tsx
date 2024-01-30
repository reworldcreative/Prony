import React, { FC } from "react";
import "./headerRadio.scss";

type HeaderRadioProps = {
  labelText: string;
  value: string;
  defaultChecked?: boolean;
};

const HeaderRadio: FC<HeaderRadioProps> = ({
  labelText,
  value,
  defaultChecked,
}) => {
  return (
    <div className="radio__container">
      {defaultChecked ? (
        <input
          type="radio"
          id={value}
          name="theme"
          value={value}
          defaultChecked
        />
      ) : (
        <input type="radio" id={value} name="theme" value={value} />
      )}
      <label htmlFor={value} className="radio-label text">
        {labelText}
      </label>
    </div>
  );
};

export default HeaderRadio;
