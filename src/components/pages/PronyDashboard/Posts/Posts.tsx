import React, { FC, useContext, useState } from "react";
import "./Posts.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import Selectors from "./Selectors";
import Marker from "./Marker/Marker";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import PostsItem, { PostsItemProps } from "./PostsItem/PostsItem";

import importIcon from "@/assets/img/icons/posts/import.svg";
import exportIcon from "@/assets/img/icons/posts/export.svg";

import postsData from "@/data/Posts.json";
import PerPage from "./PerPage";
import Pagination from "@/components/UI/Pagination/Pagination";
import PopUp from "@/components/widgets/PopUp/PopUp";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./forms/CreateForm/CreateForm";
import { FieldValues } from "react-hook-form";

const Posts: FC = () => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

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
  const [postsList, setPostsList] = useState([...postsData]);

  const [formType, setFormType] = useState<"create" | "edit">("create");

  const defaultPostsItem: PostsItemProps = {
    id: 0,
    avatar: "",
    name: "",
    title: "",
    time: "",
    text: "",
    tags: [{ name: "Tagname1", type: "standard", color: "success" }],
    likes: 0,
    posts: 0,
  };

  const [editData, setEditData] = useState<PostsItemProps>();

  const postsPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(postsList.length / postsPerPage) && setCurrentPage(pageNumber);
  };

  const handleCreatePost = () => {
    setFormType("create");
    setOpenPopUp(true);
    setEditData(defaultPostsItem);
  };

  const deletePost = (id: number) => {
    setPostsList(postsList.filter((post) => post.id !== id));
  };

  const editPost = (id: number) => {
    setOpenPopUp(true);
    const post = postsList.find((post) => post.id === id);
    setEditData({
      id: post.id,
      likes: post.likes,
      posts: post.posts,
      name: post.name,
      avatar: post.avatar,
      tags: post.tags.map((tag) => ({
        ...tag,
        color: tag.color.toString() as "info" | "success" | "danger",
        type: tag.type.toString() as "standard" | "remove",
      })),

      time: post.time,
      title: post.title,
      text: post.text,
    });
  };

  const handleEditPost = (data: FieldValues) => {
    const editPostIndex = postsList.findIndex((post) => post.id === data.id);
    const newItem: PostsItemProps = {
      id: data.id,
      avatar: postsList[editPostIndex].avatar,
      name: data.Owner,
      title: data.postTitle,
      time: "now",
      text: data.details,
      tags: [
        { name: data.Status, type: "standard", color: "success" },
        { name: data.BoardName, type: "standard", color: "success" },
      ],
      likes: postsList[editPostIndex].likes,
      posts: postsList[editPostIndex].posts,
    };

    postsList[editPostIndex] = newItem;
  };

  const createPost = (data: FieldValues) => {
    const newPost = {
      id: postsList.length + 1,
      avatar: "",
      name: data.Owner,
      title: data.postTitle,
      time: "now",
      text: data.details,
      tags: [
        { name: data.Status, type: "standard", color: "success" },
        { name: data.BoardName, type: "standard", color: "success" },
      ],
      likes: 0,
      posts: 0,
    };

    setPostsList([...postsList, newPost]);
  };

  return (
    <>
      <PopUp>
        {formType === "create" ? (
          <CreateForm
            formTitle="Create post"
            formType="create"
            submitSuccess={createPost}
            formData={defaultPostsItem}
          />
        ) : (
          <CreateForm formTitle="Edit post" formType="edit" submitSuccess={handleEditPost} formData={editData} />
        )}
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["Posts"]} currentLink={["/posts"]} />

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

        <section className="posts pageContainer-section">
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
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setBoards(boards.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {owners.map((owner, index) => (
                <Marker
                  name={`Owner: ${owner}`}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setOwners(owners.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {segments.map((segment, index) => (
                <Marker
                  name={`Segment: ${segment}`}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setSegments(segments.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {authors.map((author, index) => (
                <Marker
                  name={`Author: ${author}`}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setAuthor(authors.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}

              {approved.map((approve, index) => (
                <Marker
                  name={approve}
                  key={index}
                  color="info"
                  type="remove"
                  removeItem={() => {
                    setApproved(approved.filter((_, currentIndex) => currentIndex !== index));
                  }}
                />
              ))}
            </div>

            <section className="posts__sort">
              <div className="container">
                <p className="text-second">Sort by:</p>
                <Dropdown type="bordered" current="Newest" options={["Newest", "Latest"]} onSelect={setSortBy} />
              </div>

              <PerPage current={perPage} onSelect={setPerPage} />
            </section>
          </div>

          <section className="posts__list">
            {currentPosts.map((post, index) => (
              <PostsItem
                key={index}
                id={post.id}
                likes={post.likes}
                posts={post.posts}
                name={post.name}
                avatar={post.avatar}
                tags={post.tags.map((tag) => ({
                  ...tag,
                  color: tag.color.toString() as "info" | "success" | "danger",
                  type: tag.type.toString() as "standard" | "remove",
                }))}
                time={post.time}
                title={post.title}
                text={post.text}
                deletePost={deletePost}
                editPost={editPost}
                setFormType={setFormType}
              />
            ))}
          </section>

          <div className="posts__sort posts__sort_bottom">
            <Pagination
              paginate={paginate}
              currentPage={currentPage}
              totalPages={Math.ceil(postsList.length / postsPerPage)}
            />
            <PerPage current={perPage} onSelect={setPerPage} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Posts;
