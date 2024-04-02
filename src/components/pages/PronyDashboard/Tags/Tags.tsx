import React, { FC, useContext, useState } from "react";
import "./Tags.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import PopUp from "@/components/widgets/PopUp/PopUp";
import Button from "@/components/UI/buttons/Button/Button";
import TagsItem, { TagsItemData } from "./TagsItem/TagsItem";

import tagsData from "@/data/Tags.json";
import { Reorder } from "framer-motion";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./form/CreateForm/CreateForm";
import ReplaceForm from "./form/ReplaceForm/ReplaceForm";

const Tags: FC = () => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [formType, setFormType] = useState<string>("create");
  const [editTagIndex, setEditTagIndex] = useState<number>(0);
  const [replaceTagIndex, setReplaceTagIndex] = useState<number>(0);
  const [tagsList, setTagsList] = useState<TagsItemData[]>([...tagsData]);
  const ids = tagsList.map(({ id }) => id);

  const handleOpenAddTagsForm = () => {
    setFormType("create");
    setOpenPopUp(true);
  };

  const handleAddTag = (data: { id: string; TagName: string; color: string; status: string }) => {
    setTagsList([...tagsList, { ...data, title: data.TagName, id: Math.max(...ids) + 1 }]);
  };

  const handleOpenEditTagsForm = (id: number) => {
    setEditTagIndex(tagsList.findIndex((tag) => tag.id === id));
    setFormType("edit");
    setOpenPopUp(true);
  };

  const handleEditTag = (data: { id: string; TagName: string; color: string; status: string }) => {
    const tag = tagsList[editTagIndex];
    tag.title = data.TagName;
    tag.color = data.color;
    tag.status = data.status;
    setTagsList([...tagsList]);
  };

  const handleDeleteTag = (id: number) => {
    const deletedIndex = tagsList.findIndex((tag) => tag.id === id);
    tagsList.splice(deletedIndex, 1);
    setTagsList([...tagsList]);
  };

  const handleOpenReplaceTagsForm = (id: number) => {
    setFormType("replace");
    setReplaceTagIndex(tagsList.findIndex((tag) => tag.id === id));
    setOpenPopUp(true);
  };

  const handleReplaceTags = (currentId: number, replacedItem: string) => {
    const localReplaceTagIndex = tagsList.findIndex((tag) => tag.title === replacedItem);
    const localCurrentTagIndex = tagsList.findIndex((tag) => tag.id === currentId);
    // console.log(localCurrentTagIndex, localReplaceTagIndex);
  };

  return (
    <>
      <PopUp addClass="tags__pop-up">
        {(formType === "create" || formType === "edit") && (
          <CreateForm
            formTitle={formType === "create" ? `Add tag` : `Edit tag`}
            formType={formType === "create" ? `create` : `edit`}
            submitSuccess={formType === "create" ? handleAddTag : handleEditTag}
            formData={
              formType === "create" ? { id: 0, title: "", color: "#B71C1C", status: "public" } : tagsList[editTagIndex]
            }
          />
        )}

        {formType === "replace" && (
          <ReplaceForm
            currentId={tagsList[replaceTagIndex].id}
            currentTag={tagsList[replaceTagIndex].title}
            formTitle="Replace tag"
            tags={tagsList.filter((tag) => tag.id !== tagsList[replaceTagIndex].id).map((tag) => tag.title)}
            submitSuccess={handleReplaceTags}
          />
        )}
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["Tags"]} currentLink={["/tags"]} />

        <div className="pageContainer-MainSection__top pageContainerPosts-MainSection__top">
          <h1 className="title posts-MainSection__title">Tags</h1>

          <Button type="primary" click={handleOpenAddTagsForm}>
            Add tag
          </Button>
        </div>

        <section className="tags pageContainer-section">
          <p className="visibility-hidden">tags list</p>

          <div className="tags__header">
            <h2 className="tags__caption subtitle">Name</h2>
            <h2 className="tags__caption subtitle">Color</h2>
            <h2 className="tags__caption subtitle">Privacy</h2>
          </div>

          <Reorder.Group
            className="tags__list"
            axis="y"
            values={tagsList}
            onReorder={(tags) => {
              setTagsList(tags);
            }}
          >
            {tagsList.map((tag) => (
              <TagsItem
                key={tag.id}
                data={tag}
                handleReplace={handleOpenReplaceTagsForm}
                handleEdit={handleOpenEditTagsForm}
                handleDelete={handleDeleteTag}
              />
            ))}
          </Reorder.Group>
        </section>
      </section>
    </>
  );
};

export default Tags;
