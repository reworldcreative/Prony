import React, { FC, useState } from "react";
import "./TagsItem.scss";
import { Reorder, useDragControls } from "framer-motion";
import Marker from "../../Posts/Marker/Marker";

export interface TagsItemData {
  id: number;
  title: string;
  color: string;
  status: string;
}

interface TagsItemProps {
  data: TagsItemData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  handleReplace: (id: number) => void;
}

const TagsItem: FC<TagsItemProps> = ({ data, handleEdit, handleDelete, handleReplace }) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const controls = useDragControls();

  const menuLinks = [
    {
      icon: "./img/icons/menu/change.svg",
      title: "Change",
      label: "Change tags",
      onClick: (id: number) => {
        handleReplace(id);
      },
    },
    {
      icon: "./img/icons/menu/pen.svg",
      title: "Edit",
      label: "Edit tags",
      onClick: (id: number) => {
        handleEdit(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      title: "Delete",
      label: "Delete tags",
      onClick: (id: number) => {
        handleDelete(id);
      },
    },
  ];
  return (
    <Reorder.Item className="tagsItem" value={data} dragListener={false} dragControls={controls}>
      <div
        className={`drag tagsItem__item ${dragging ? "dragging" : ""} reorder-handle`}
        onPointerDown={(e) => {
          setDragging(true);
          controls.start(e);
        }}
        onPointerUp={(e) => {
          setDragging(false);
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

      <Marker name={data.title} hashColor={data.color} type="standard" />

      <div className="tagsItem__color tagsItem__color_danger" style={{ backgroundColor: data.color }} />

      <p className={`tagsItem__status ${data.status} heading-h6`}>{data.status}</p>

      <div className="tagsItem__menu">
        {menuLinks.map((item, index) => (
          <button
            key={index}
            className="tagsItem__menu-button"
            aria-label={item.label}
            onClick={() => {
              item.onClick(data.id);
            }}
          >
            <img
              className="tagsItem__menu-icon"
              src={item.icon}
              alt={item.title}
              width="20"
              height="20"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </Reorder.Item>
  );
};

export default TagsItem;
