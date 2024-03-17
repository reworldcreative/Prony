import React, { FC, useContext, useState } from "react";
import "./Posts.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import Selectors from "./Selectors";
import Marker from "./Marker";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import PostsItem from "./PostsItem/PostsItem";

import importIcon from "@/assets/img/icons/posts/import.svg";
import exportIcon from "@/assets/img/icons/posts/export.svg";

import postsData from "@/data/Posts.json";
import PerPage from "./PerPage";

const Posts: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [createdTime, setCreatedTime] = useState<string[]>(["Last 24 hours"]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [boards, setBoards] = useState<string[]>([]);
  const [owners, setOwners] = useState<string[]>([]);
  const [authors, setAuthor] = useState<string[]>([]);
  const [segments, setSegments] = useState<string[]>([]);
  const [approved, setApproved] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("");
  const [perPage, setPerPage] = useState<string>("10");

  const handleCreatePost = () => {};

  return (
    <>
      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle="Posts" currentLink="/posts" />

        <div className="pageContainer-MainSection__top pageContainerPosts-MainSection__top">
          <h1 className="title posts-MainSection__title">Posts</h1>

          <div className="buttonsPosts">
            <button className="load-button subtitle-second" aria-label="import">
              <img src={importIcon} alt="import icon" width="14" height="17" aria-hidden="true" />
              Import
            </button>

            <button className="load-button subtitle-second" aria-label="export">
              <img src={exportIcon} alt="export icon" width="14" height="17" aria-hidden="true" />
              Export
            </button>

            <Button type="primary" click={handleCreatePost}>
              Create post
            </Button>
          </div>
        </div>

        <section className="posts">
          <div className="posts__top">
            <Selectors
              setSearch={setSearch}
              setCreatedTime={setCreatedTime}
              setStatuses={setStatuses}
              setTags={setTags}
              setBoards={setBoards}
              setOwners={setOwners}
              setAuthor={setAuthor}
              setSegments={setSegments}
              setApproved={setApproved}
              search={search}
              createdTime={createdTime}
              statuses={statuses}
              tags={tags}
              boards={boards}
              owners={owners}
              authors={authors}
              segments={segments}
              approved={approved}
            />

            <div className="posts__markersContainer">
              {tags.map((tag, index) => (
                <Marker
                  name={`Tag: ${tag}`}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setTags(tags.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {statuses.map((status, index) => (
                <Marker
                  name={`Status: ${status}`}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setStatuses(statuses.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {boards.map((board, index) => (
                <Marker
                  name={`Board: ${board}`}
                  key={index}
                  removeItem={() => {
                    setStatuses(boards.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {owners.map((owner, index) => (
                <Marker
                  name={`Owner: ${owner}`}
                  key={index}
                  removeItem={() => {
                    setStatuses(owners.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {segments.map((segment, index) => (
                <Marker
                  name={`Segment: ${segment}`}
                  key={index}
                  removeItem={() => {
                    setStatuses(segments.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}
            </div>

            <section className="posts__sort">
              <div className="container">
                <p className="text-second">Sort by:</p>
                <Dropdown current="Newest" options={["Newest", "Latest"]} onSelect={setSortBy} />
              </div>

              <PerPage current={perPage} onSelect={setPerPage} />
            </section>
          </div>

          <section className="posts__list">
            {postsData.map((post, index) => (
              <PostsItem
                key={index}
                likes={post.likes}
                posts={post.posts}
                name={post.name}
                picture={post.picture}
                tags={post.tags.map((tag) => ({
                  ...tag,
                  color: tag.color === "info" || tag.color === "success" || tag.color === "danger" ? tag.color : "info",
                  type: tag.type === "standard" || tag.type === "remove" ? tag.type : "standard",
                }))}
                time={post.time}
                title={post.title}
                text={post.text}
              />
            ))}
          </section>

          <PerPage current={perPage} onSelect={setPerPage} />
        </section>
      </section>
    </>
  );
};

export default Posts;
