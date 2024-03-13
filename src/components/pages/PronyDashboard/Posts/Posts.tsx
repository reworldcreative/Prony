import React, { FC, useState } from "react";
import "./Posts.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";
import Search from "@/components/UI/forms/Search/Search";

const Posts: FC = () => {
  const [createdTime, setCreatedTime] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [boards, setBoards] = useState<string[]>([]);

  const handleCreatePost = () => {};

  return (
    <>
      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle="Posts" currentLink="/posts" />

        <div className="pageContainer-MainSection__top">
          <h1 className="title posts-MainSection__title">Posts</h1>

          <Button type="primary" click={handleCreatePost}>
            Create post
          </Button>
        </div>
      </section>

      <div className="posts__selectors">
        <Search name="posts" placeholder="Search all posts" addClass="double" />

        <DropdownSelect
          getValue={setTags}
          defaultValue={""}
          selectType="checkbox"
          title={"Tags"}
          options={[
            {
              value: "Tagname1",
              labelText: "Tagname1",
            },
            {
              value: "Tagname2",
              labelText: "Tagname2",
            },
          ]}
        />

        <DropdownSelect
          getValue={setBoards}
          defaultValue={""}
          selectType="checkbox"
          title={"Boards"}
          options={[
            {
              value: "Board-name1",
              labelText: "Board name1",
            },
            {
              value: "Board-name2",
              labelText: "Board name2",
            },
          ]}
        />

        <DropdownSelect
          getValue={setCreatedTime}
          defaultValue={"Last-day"}
          selectType="radio"
          title={"Created in"}
          options={[
            {
              value: "Last-day",
              labelText: "Last 24 hours",
            },
            {
              value: "Last-week",
              labelText: "Last week",
            },
            {
              value: "Last-month",
              labelText: "Last month",
            },
          ]}
        />

        <DropdownSelect
          getValue={setStatuses}
          defaultValue={""}
          selectType="checkbox"
          title={"Statuses"}
          options={[
            {
              value: "status1",
              labelText: "Status1",
            },
            {
              value: "status2",
              labelText: "Status2",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Posts;
