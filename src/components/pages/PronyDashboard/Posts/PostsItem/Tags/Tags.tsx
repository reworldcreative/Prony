import React, { FC } from "react";
import "./Tags.scss";
import Marker from "../../Marker/Marker";

interface TagsProps {
  tags: { name: string; color: "info" | "success" | "danger"; type: "standard" | "remove" }[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="posts-item__tags">
      {tags && tags.map((tag) => <Marker key={tag.name} name={tag.name} color={tag.color} type={tag.type} />)}
    </div>
  );
};

export default Tags;
