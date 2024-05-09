import React, { FC, useContext, useRef, useState } from "react";
import "./PostView.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import PopUp from "@/components/widgets/PopUp/PopUp";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Tags from "@/components/pages/PronyDashboard/Posts/PostsItem/Tags/Tags";
import { Link, useParams } from "react-router-dom";
import PostViewForm from "./PostViewForm/PostViewForm";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import PostElement from "./PostElement/PostElement";

import like from "@/assets/img/icons/menu/like.svg";
import messageIcon from "@/assets/img/icons/menu/message.svg";
import post1 from "@/assets/img/posts/post1.jpg";
import postImage from "@/assets/img/posts/post2.jpg";
import postsData from "@/data/Posts.json";

const PostView: FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState(postsData[0]);
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [popUpImage, setPopUpImage] = useState("");

  const openPopupImage = (image: string) => {
    setPopUpImage(image);
    setOpenPopUp(true);
  };

  return (
    <>
      <PopUp>
        <PictureComponent
          src={popUpImage}
          alt="an orange chair in a loft interior"
          className="post-view__image-popup"
          width="250"
          height="176"
        />
      </PopUp>

      <section className="post-view">
        <div className="post-view__container">
          <div className="post-view__container-top">
            <p className="post-view__voters-label">Voters:</p>

            <div className="post-view__voters-list">
              <PictureComponent src={post.avatar} height="30" width="30" className="post-view__voters-item" />
              <PictureComponent src={post.avatar} height="30" width="30" className="post-view__voters-item" />
              <PictureComponent src={post.avatar} height="30" width="30" className="post-view__voters-item" />
            </div>

            <p className="post-view__voters-count">+12</p>
          </div>

          <div className="post-view__content">
            <div className="post-view__likes" tabIndex={0}>
              <img
                className="post-view__likes-icon"
                src={like}
                alt="like icon"
                width="20"
                height="20"
                aria-hidden="true"
              />
              {post?.likes} <span className="visibility-hidden">likes</span>
            </div>

            <PictureComponent src={post.avatar} height="34" width="34" className="post-view__avatar" />

            <p className="post-view__name text">{post.name}</p>

            <p className="post-view__time text">{post.time}</p>
          </div>

          <div className="post-view__main">
            <p className="post-view__title">{post.title}</p>

            <p className="post-view__text">{post.text}</p>

            <div
              onClick={() => {
                openPopupImage(post1);
              }}
            >
              <PictureComponent
                src={post1}
                alt="an orange chair in a loft interior"
                className="post-view__image"
                width="200"
                height="150"
              />
            </div>

            <div className="post-view__info">
              <div className="post-view__status">Complete</div>

              <div className="post-view__comments">
                <img
                  className="post-view__comments-icon"
                  src={messageIcon}
                  alt="posts icon"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                {post?.posts} comments
              </div>

              <Tags
                tags={
                  post.tags as { name: string; color: "info" | "success" | "danger"; type: "standard" | "remove" }[]
                }
              />
            </div>
          </div>

          <PostViewForm />
        </div>

        <div className="post-view__sort sort-container">
          <p className="text-second">Sort by:</p>
          <Dropdown current="Trending" type="bordered" options={["Recent", "Newest", "Trending"]} onSelect={() => {}} />
        </div>

        <section className="post-view__list">
          <PostElement
            avatar="./img/avatars/avatar_9.jpg"
            name="Sophia-Rose Nava"
            data="01-02-2020"
            likes={3}
            isPrivate={true}
            text=" Instead of send updates via email, send them through the original conversation on Intercom Instead of send
          updates via email, send them through the original conversation on Intercom Instead of send updates via email,
          send them through the original conversation on Intercom"
          />

          <PostElement
            avatar="./img/avatars/avatar_10.jpg"
            name="Anna Walley"
            data="01-02-2020"
            likes={3}
            text=" Instead of send updates via email, send them through the original conversation on Intercom Instead of send
          updates via email, send them through the original conversation on Intercom Instead of send updates via email,
          send them through the original conversation on Intercom"
          >
            <PostElement
              avatar="./img/avatars/avatar_11.jpg"
              name="Uzair Valdez"
              data="01-02-2020"
              likes={3}
              text=" Instead of send updates via email, send them through the original conversation on Intercom Instead of send
          updates via email, send them through the original conversation on Intercom Instead of send updates via email,
          send them through the original conversation on Intercom"
            />
          </PostElement>

          <PostElement
            avatar="./img/avatars/avatar_12.jpg"
            name="Kasim Daniels"
            data="01-02-2020"
            likes={3}
            image={postImage}
            text=" Instead of send updates via email, send them through the original conversation on Intercom Instead of send
          updates via email, send them through the original conversation on Intercom Instead of send updates via email,
          send them through the original conversation on Intercom"
            openPopupImage={openPopupImage}
          />
        </section>
      </section>
    </>
  );
};

export default PostView;
