import React, { FC } from "react";
import "./AddFieldItem.scss";

interface AddFieldItemProps {
  title: string;
  text: string;
}
const AddFieldItem: FC<AddFieldItemProps> = ({ title, text }) => {
  return (
    <button className="addField__item">
      <span className="heading-h6">{title}</span>
      <span className="caption">{text}</span>
    </button>
  );
};

export default AddFieldItem;
