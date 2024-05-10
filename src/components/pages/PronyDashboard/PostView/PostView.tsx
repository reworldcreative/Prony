import React, { FC, useContext, useRef, useState } from "react";
import "./PostView.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import PostLogo from "../Posts/PostsItem/PostLogo/PostLogo";
import PictureComponent from "@/../plugins/PictureComponent";
import PopUp from "@/components/widgets/PopUp/PopUp";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Tags from "../Posts/PostsItem/Tags/Tags";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
import { Link, useParams } from "react-router-dom";
import PostViewForm from "./PostViewForm/PostViewForm";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import PostElement from "./PostElement/PostElement";

import like from "@/assets/img/icons/menu/like.svg";
import post1 from "@/assets/img/posts/post1.jpg";
import postImage from "@/assets/img/posts/post2.jpg";
import Pagination from "@/components/UI/Pagination/Pagination";
import PostViewPopUpForm from "./PostViewPopUpForm/PostViewPopUpForm";
import postsData from "@/data/Posts.json";

const PostView: FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState(postsData.find((post) => post.id === Number(id)));
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [popUpImage, setPopUpImage] = useState("");
  const [popUpType, setPopUpType] = useState<"image" | "add" | "change" | "">("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenuButtonRef = useRef<HTMLButtonElement>(null);

  const openMenuLinks = [
    {
      icon: "./img/icons/eye.svg",
      text: "Public view",
      url: "",
      onClick: () => {
        setIsOpenMenu(false);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      text: `Delete post`,
      onClick: () => {
        setIsOpenMenu(false);
      },
    },
    {
      icon: "./img/icons/menu/pen.svg",
      text: `Edit post`,
      onClick: () => {
        setIsOpenMenu(false);
      },
    },
    {
      icon: "./img/icons/menu/merge.svg",
      text: `Merge post`,
      onClick: () => {},
    },
    {
      icon: "./img/icons/menu/change.svg",
      text: `Change status`,
      onClick: () => {
        setPopUpType("change");
        setOpenPopUp(true);
      },
    },
    {
      icon: "./img/icons/menu/add.svg",
      text: `Add voter`,
      onClick: () => {
        setPopUpType("add");
        setOpenPopUp(true);
      },
    },
    {
      icon: "./img/icons/menu/like.svg",
      text: `List voters`,
      url: `/post-voters/${id}`,
      onClick: () => {},
    },
  ];

  const openPopupImage = (image: string) => {
    setPopUpType("image");
    setPopUpImage(image);
    setOpenPopUp(true);
  };

  return (
    <>
      <PopUp>
        {popUpType === "image" && (
          <PictureComponent
            src={popUpImage}
            alt="an orange chair in a loft interior"
            className="post-view__image-popup"
            width="250"
            height="176"
          />
        )}

        {popUpType === "change" && <PostViewPopUpForm title="Changes post status" type="change" />}
        {popUpType === "add" && <PostViewPopUpForm title="Add voter" type="add" />}
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["Posts", "Post view"]} currentLink={["/posts", `/post-view/${id}`]} />

        <div className="pageContainer-MainSection__top pageContainerPost-view-MainSection__top">
          <h1 className="title posts-MainSection__title">Post view</h1>
        </div>

        <section className="pageContainer-section pageContainer-section-posts">
          <div className="post-view__container">
            <div className="post-view__container-top">
              <div className="post-view__likes title-second" tabIndex={0}>
                <img
                  className="post-view__likes-icon"
                  src={like}
                  alt="like icon"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  loading="lazy"
                />
                {post?.likes} <span className="visibility-hidden">likes</span>
              </div>

              <div className="posts-item__menu">
                <div aria-live="assertive">
                  <OptionButton
                    title="open options menu"
                    label={isOpenMenu ? "close" : "open"}
                    click={() => setIsOpenMenu(!isOpenMenu)}
                    buttonRef={openMenuButtonRef}
                  />
                  <OpenMenu
                    isOpen={isOpenMenu}
                    addClass={`post-view__openMenu ${isOpenMenu ? "openMenu_open" : ""}`}
                    ariaHidden={!isOpenMenu}
                    openButton={openMenuButtonRef}
                  >
                    {openMenuLinks.map((link, index) =>
                      link.url ? (
                        <Link to={link.url} className="openMenu__item" key={index}>
                          <img
                            src={link.icon}
                            className="openMenu__icon"
                            alt={link.text}
                            aria-hidden="true"
                            width="20"
                            height="20"
                          />
                          <span className="text openMenu__text">{link.text}</span>
                        </Link>
                      ) : (
                        <button onClick={link.onClick} className="openMenu__item" key={index}>
                          <img
                            src={link.icon}
                            className="openMenu__icon"
                            alt={link.text}
                            aria-hidden="true"
                            width="20"
                            height="20"
                            loading="lazy"
                          />
                          <span className="text openMenu__text">{link.text}</span>
                        </button>
                      )
                    )}
                  </OpenMenu>
                </div>
              </div>
            </div>

            <div className="post-view__content">
              <PostLogo avatar={post.avatar} name="Ross Gillespie" />

              <div className="post-view__main">
                <div className="post-view__top">
                  <h3 className="post-view__title heading-h5">{post.title}</h3>
                  <p className="post-view__time text">{post.time}</p>
                </div>

                <div className="post-view__status text">Complete</div>

                <p className="post-view__text text">{post.text}</p>

                <div
                  onClick={() => {
                    openPopupImage(post1);
                  }}
                >
                  <PictureComponent
                    src={post1}
                    alt="an orange chair in a loft interior"
                    className="post-view__image"
                    width="250"
                    height="176"
                  />
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
            <Dropdown current="Recent" type="bordered" options={["Recent", "Newest", "Latest"]} onSelect={() => {}} />
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

          <Pagination addClass="post-view__navigation" currentPage={1} totalPages={10} paginate={() => {}} />
        </section>
      </section>
    </>
  );
};

export default PostView;
