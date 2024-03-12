import React, { FC, useState } from "react";
import "./Posts.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";

const Posts: FC = () => {
  const handleCreatePost = () => {};
  const [createdTime, setCreatedTime] = useState<string>("");
  const [statuses, setStatuses] = useState<string[]>([]);

  const handleSetCreatedTime = (value: string | string[]) => {
    if (typeof value === "string") {
      setCreatedTime(value);
    } else {
      if (value.length > 0) {
        setCreatedTime(value[0]);
      }
    }
  };

  const handleSetStatuses = (value: string | string[]) => {
    if (typeof value === "string") {
      setStatuses([value]);
    } else {
      setStatuses(value);
    }
  };

  return (
    <>
      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle="Posts" currentLink="/tposts" />

        <div className="pageContainer-MainSection__top">
          <h1 className="title Posts-MainSection__title">Posts</h1>

          <Button type="primary" click={handleCreatePost}>
            Create post
          </Button>
        </div>
      </section>

      <DropdownSelect getValue={handleSetCreatedTime} defaultValue={"Last-day"} selectType="radio" />
      <DropdownSelect getValue={handleSetStatuses} defaultValue={""} selectType="checkbox" />
    </>
  );
};

export default Posts;
