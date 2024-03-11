import React, { FC } from "react";
import "./Posts.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Header from "@/components/widgets/Header/Header";
import Button from "@/components/UI/buttons/Button/Button";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";

const Posts: FC = () => {
  const handleCreatePost = () => {};

  return (
    <>
      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle="Posts" currentLink="/posts" />

        <div className="pageContainer-MainSection__top">
          <h1 className="title Posts-MainSection__title">Posts</h1>

          <Button type="primary" click={handleCreatePost}>
            Create post
          </Button>
        </div>
      </section>

      <DropdownSelect />
    </>
  );
};

export default Posts;
