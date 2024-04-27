import React, { FC } from "react";
import "./ChangelogItem.scss";
import Marker from "../../Posts/Marker/Marker";

export interface ChangelogItemData {
  id: number;
  title: string;
  time: string;
  tags: { name: string; color: string }[];
  details: string;
  image: string;
}

interface ChangelogItemProps {
  data: ChangelogItemData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const ChangelogItem: FC<ChangelogItemProps> = ({ data, handleEdit, handleDelete }) => {
  const menuLinks = [
    {
      icon: "./img/icons/menu/pen.svg",
      title: "Edit",
      label: "Edit changelog",
      onClick: (id: number) => {
        handleEdit(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      title: "Delete",
      label: "Delete changelog",
      onClick: (id: number) => {
        handleDelete(id);
      },
    },
  ];

  return (
    <div className="changelog-item">
      <p className="changelog-item__title heading-h6">{data.title}</p>

      <p className="changelog-item__time heading-h6">{data.time}</p>

      <div className="changelog-item__labels">
        {data.tags &&
          data.tags.map((tag, index) => <Marker key={index} name={tag.name} hashColor={tag.color} type="standard" />)}
      </div>

      <div className="changelog-item__menu">
        {menuLinks.map((item, index) => (
          <button
            key={index}
            className="changelog-item__menu-button"
            aria-label={item.label}
            onClick={() => {
              item.onClick(data.id);
            }}
          >
            <img
              className="changelog-item__menu-icon"
              src={item.icon}
              alt={item.title}
              width="20"
              height="20"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangelogItem;
