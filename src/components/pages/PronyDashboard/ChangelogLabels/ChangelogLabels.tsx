import React, { FC, useContext, useState } from "react";
import "./ChangelogLabels.scss";
import PopUp from "@/components/widgets/PopUp/PopUp";
import Button from "@/components/UI/buttons/Button/Button";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import ChangelogLabelsItem, { ChangelogLabelsItemData } from "./ChangelogLabelsItem/ChangelogLabelsItem";
import ChangelogsLabels from "@/data/ChangelogsLabels.json";
import { Reorder } from "framer-motion";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./forms/CreateForm";

const ChangelogLabels: FC = () => {
  const [ChangelogsLabelsList, setChangelogsList] = useState<ChangelogLabelsItemData[]>([...ChangelogsLabels]);

  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [formType, setFormType] = useState<"create" | "edit">("create");
  const [editChangelogsLabelsIndex, setEditChangelogsLabelsIndex] = useState<number>(0);
  const ids = ChangelogsLabelsList.map(({ id }) => id);

  const handleOpenAddChangelogLabelsForm = () => {
    setFormType("create");
    setOpenPopUp(true);
  };

  const handleAddChangelogLabels = (data: ChangelogLabelsItemData) => {
    setChangelogsList([...ChangelogsLabelsList, { ...data, id: Math.max(...ids) + 1 }]);
  };

  const handleOpenEditChangelogLabelsForm = (id: number) => {
    setEditChangelogsLabelsIndex(ChangelogsLabelsList.findIndex((changelog) => changelog.id === id));
    setFormType("edit");
    setOpenPopUp(true);
  };

  const handleEditChangelogLabels = (data: ChangelogLabelsItemData) => {
    const segment = ChangelogsLabelsList[editChangelogsLabelsIndex];
    segment.color = data.color;
    segment.name = data.name;
    setChangelogsList([...ChangelogsLabelsList]);
  };

  const handleDeleteChangelogLabels = (id: number) => {
    const deletedIndex = ChangelogsLabelsList.findIndex((changelogLabel) => changelogLabel.id === id);
    ChangelogsLabelsList.splice(deletedIndex, 1);
    setChangelogsList([...ChangelogsLabelsList]);
  };
  return (
    <>
      <PopUp addClass="changelog-labels__pop-up">
        <CreateForm
          formData={
            formType === "create"
              ? { id: 0, name: "", color: "#546E7A" }
              : ChangelogsLabelsList.length > 0
              ? ChangelogsLabelsList[editChangelogsLabelsIndex]
              : { id: 0, name: "", color: "#546E7A" }
          }
          formTitle={formType === "create" ? "Adds new changelog label" : "Edit changelog label"}
          formType={formType === "create" ? "create" : "edit"}
          submitSuccess={formType === "create" ? handleAddChangelogLabels : handleEditChangelogLabels}
        />
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs
          currentTitle={["Changelog", "Changelog labels"]}
          currentLink={["/changelog", "/changelog-labels"]}
        />

        <div className="pageContainer-MainSection__top pageContainerChangelogLabels-MainSection__top">
          <h1 className="title posts-MainSection__title">Changelog Labels</h1>

          <Button type="primary" click={handleOpenAddChangelogLabelsForm}>
            Add label
          </Button>
        </div>

        <section className="changelog-labels pageContainer-section">
          <div className="changelog-labels__top">
            <h2 className="changelog-labels__caption subtitle">Name</h2>
            <h2 className="changelog-labels__caption subtitle">Color</h2>
          </div>

          <Reorder.Group
            className="changelog-labels__list"
            axis="y"
            values={ChangelogsLabelsList}
            onReorder={(ChangelogsLabels) => {
              setChangelogsList(ChangelogsLabels);
            }}
          >
            {ChangelogsLabelsList.map((changelogLabel) => (
              <ChangelogLabelsItem
                key={changelogLabel.id}
                data={changelogLabel}
                handleDelete={handleDeleteChangelogLabels}
                handleEdit={handleOpenEditChangelogLabelsForm}
              />
            ))}
          </Reorder.Group>
        </section>
      </section>
    </>
  );
};

export default ChangelogLabels;
