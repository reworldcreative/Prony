import React, { FC, useState } from "react";
import "./Posts.scss";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";
import Search from "@/components/UI/forms/Search/Search";

interface SelectorsProps {
  setSearch: (value: string) => void;
  setCreatedTime: (value: string[]) => void;
  setStatuses: (value: string[]) => void;
  setTags: (value: string[]) => void;
  setBoards: (value: string[]) => void;
  setOwners: (value: string[]) => void;
  setAuthor: (value: string[]) => void;
  setSegments: (value: string[]) => void;
  setApproved: (value: string[]) => void;
  search: string;
  createdTime: string[];
  statuses: string[];
  tags: string[];
  boards: string[];
  owners: string[];
  authors: string[];
  segments: string[];
  approved: string[];
}
const Selectors: FC<SelectorsProps> = ({
  setSearch,
  setCreatedTime,
  setStatuses,
  setTags,
  setBoards,
  setOwners,
  setAuthor,
  setSegments,
  setApproved,
  search,
  createdTime,
  statuses,
  tags,
  boards,
  owners,
  authors,
  segments,
  approved,
}) => {
  return (
    <div className="posts__selectors">
      <Search name="posts" placeholder="Search all posts" addClass="double" getValue={setSearch} />

      <DropdownSelect
        getValue={setTags}
        defaultValue={tags}
        selectType="checkbox"
        title={"Tags"}
        marked={true}
        options={[
          {
            name: "Tag-name1",
            labelText: "Tag name 1",
          },
          {
            name: "Tag-name2",
            labelText: "Tag name 2",
          },
        ]}
      />

      <DropdownSelect
        getValue={setBoards}
        defaultValue={boards}
        selectType="checkbox"
        title={"Boards"}
        marked={true}
        options={[
          {
            name: "Board-1",
            labelText: "Board name1",
          },
          {
            name: "Board-2",
            labelText: "Board name2",
          },
        ]}
      />

      <DropdownSelect
        getValue={setStatuses}
        defaultValue={statuses}
        selectType="checkbox"
        title={"Statuses"}
        marked={true}
        options={[
          {
            name: "status1",
            labelText: "Status1",
          },
          {
            name: "status2",
            labelText: "Status2",
          },
        ]}
      />

      <DropdownSelect
        getValue={setOwners}
        defaultValue={owners}
        selectType="checkbox"
        title={"Owners"}
        marked={true}
        options={[
          {
            name: "owner1",
            labelText: "owner1",
          },
          {
            name: "owner2",
            labelText: "owner2",
          },
        ]}
      />

      <DropdownSelect
        getValue={setAuthor}
        defaultValue={authors}
        selectType="checkbox"
        title={"Author"}
        marked={true}
        options={[
          {
            name: "author1",
            labelText: "author1",
          },
          {
            name: "author2",
            labelText: "author2",
          },
        ]}
      />

      <DropdownSelect
        getValue={setCreatedTime}
        defaultValue={createdTime}
        selectType="radio"
        marked={true}
        title={"Created in"}
        options={[
          {
            name: "Last-day",
            labelText: "Last 24 hours",
          },
          {
            name: "Last-week",
            labelText: "Last week",
          },
          {
            name: "Last-month",
            labelText: "Last month",
          },
        ]}
      />

      <DropdownSelect
        getValue={setSegments}
        defaultValue={segments}
        selectType="checkbox"
        title={"User segments"}
        marked={true}
        options={[
          {
            name: "user-segments1",
            labelText: "User segments 1",
          },
          {
            name: "user-segments2",
            labelText: "User segments 2",
          },
          {
            name: "user-segments3",
            labelText: "User segments 3",
          },
        ]}
      />

      <DropdownSelect
        getValue={setApproved}
        defaultValue={approved}
        selectType="checkbox"
        title={"Approved"}
        marked={true}
        options={[
          {
            name: "approved",
            labelText: "Approved",
          },
          {
            name: "no-approved",
            labelText: "No Approved",
          },
        ]}
      />
    </div>
  );
};

export default Selectors;
