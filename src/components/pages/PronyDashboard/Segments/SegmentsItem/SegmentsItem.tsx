import React, { FC } from "react";
import "./SegmentsItem.scss";
import { Reorder, useDragControls } from "framer-motion";

export interface SegmentsItemData {
  id: number;
  name: string;
  representation: string;
}

interface SegmentsItemProps {
  data: SegmentsItemData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const SegmentsItem: FC<SegmentsItemProps> = ({ data, handleEdit, handleDelete }) => {
  const controls = useDragControls();

  const menuLinks = [
    {
      icon: "./img/icons/menu/pen.svg",
      title: "Edit",
      label: "Edit segment",
      onClick: (id: number) => {
        handleEdit(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      title: "Delete",
      label: "Delete segment",
      onClick: (id: number) => {
        handleDelete(id);
      },
    },
  ];

  return (
    <Reorder.Item className="segmentsItem" value={data} dragListener={false} dragControls={controls}>
      <div
        className={`drag segmentsItem__item dragging reorder-handle`}
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

      <p className="segmentsItem__name heading-h6">{data.name}</p>

      <p className="segmentsItem__representation heading-h6">{data.representation}</p>

      <div className="segmentsItem__menu">
        {menuLinks.map((item, index) => (
          <button
            key={index}
            className="segmentsItem__menu-button"
            aria-label={item.label}
            onClick={() => {
              item.onClick(data.id);
            }}
          >
            <img
              className="segmentsItem__menu-icon"
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

export default SegmentsItem;
