import React, { FC } from "react";
import "./StatusesItem.scss";
import { Reorder, useDragControls } from "framer-motion";

export interface StatusesItemData {
  id: number;
  name: string;
  votable: boolean;
  showOnRoadmap: boolean;
  privacy: boolean;
  color: string;
}

interface StatusesItemProps {
  data: StatusesItemData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const StatusesItem: FC<StatusesItemProps> = ({ data, handleEdit, handleDelete }) => {
  const controls = useDragControls();

  const menuLinks = [
    {
      icon: "./img/icons/menu/pen.svg",
      title: "Edit",
      label: "Edit status",
      onClick: (id: number) => {
        handleEdit(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      title: "Delete",
      label: "Delete status",
      onClick: (id: number) => {
        handleDelete(id);
      },
    },
  ];

  return (
    <Reorder.Item className="statusesItem" value={data} dragListener={false} dragControls={controls}>
      <div
        className={`drag statusesItem__item dragging reorder-handle`}
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

      <p className="statusesItem__name heading-h6">
        <span className=" statusesItem__name-color-label" style={{ backgroundColor: data.color }} />
        {data.name}
      </p>

      <p
        className={`statusesItem__attribute ${
          data.votable ? "statusesItem__attribute_active" : "statusesItem__attribute_mute"
        } heading-h6`}
      >
        {data.votable ? "yes" : "no"}
      </p>

      <p
        className={`statusesItem__attribute ${
          data.showOnRoadmap ? "statusesItem__attribute_active" : "statusesItem__attribute_mute"
        } heading-h6`}
      >
        {data.showOnRoadmap ? "yes" : "no"}
      </p>

      <p className={`statusesItem__attribute ${data.privacy ? "" : "statusesItem__attribute_mute"} heading-h6`}>
        {data.privacy ? "private" : "public"}
      </p>

      <div className="statusesItem__color" style={{ backgroundColor: data.color }} />

      <div className="statusesItem__menu">
        {menuLinks.map((item, index) => (
          <button
            key={index}
            className="statusesItem__menu-button"
            aria-label={item.label}
            onClick={() => {
              item.onClick(data.id);
            }}
          >
            <img
              className="statusesItem__menu-icon"
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

export default StatusesItem;
