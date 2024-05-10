import React, { FC } from "react";
import "./ChangelogLabelsItem.scss";
import { Reorder, useDragControls } from "framer-motion";

export interface ChangelogLabelsItemData {
  id: number;
  name: string;
  color: string;
}

interface ChangelogLabelsItemProps {
  data: ChangelogLabelsItemData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const ChangelogLabelsItem: FC<ChangelogLabelsItemProps> = ({ data, handleEdit, handleDelete }) => {
  const controls = useDragControls();

  const menuLinks = [
    {
      icon: "./img/icons/menu/pen.svg",
      title: "Edit",
      label: "Edit changelog item",
      onClick: (id: number) => {
        handleEdit(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      title: "Delete",
      label: "Delete changelog item",
      onClick: (id: number) => {
        handleDelete(id);
      },
    },
  ];

  return (
    <Reorder.Item className="changelog-labels-item" value={data} dragListener={false} dragControls={controls}>
      <div
        className={`drag changelog-labels-item__drag dragging reorder-handle`}
        onPointerDown={(e) => {
          controls.start(e);
        }}
      >
        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>

        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <p className="changelog-labels-item__name text-second" style={{ backgroundColor: data.color }}>
        {data.name}
      </p>
      <div className="changelog-labels-item__color" style={{ backgroundColor: data.color }} />

      <div className="changelog-labels-item__menu">
        {menuLinks.map((item, index) => (
          <button
            key={index}
            className="changelog-labels-item__menu-button"
            aria-label={item.label}
            onClick={() => {
              item.onClick(data.id);
            }}
          >
            <img
              className="changelog-labels-item__menu-icon"
              src={item.icon}
              alt={item.title}
              width="20"
              height="20"
              aria-hidden="true"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </Reorder.Item>
  );
};

export default ChangelogLabelsItem;
