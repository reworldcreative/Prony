import React, { FC, useContext, useState } from "react";
import "./Statuses.scss";
import PopUp from "@/components/widgets/PopUp/PopUp";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import undo from "@icons/undo.svg";
import info from "@icons/info.svg";
import StatusesItem, { StatusesItemData } from "./StatusesItem/StatusesItem";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import StatusesListData from "@/data/Statuses.json";
import { Reorder } from "framer-motion";
import CreateForm from "./forms/CreateForm/CreateForm";

const Statuses: FC = () => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [formType, setFormType] = useState<"create" | "edit">("create");
  const [editStatusIndex, setEditStatusIndex] = useState<number>(0);
  const [statusList, setStatusList] = useState<StatusesItemData[]>([...StatusesListData]);
  const ids = statusList.map(({ id }) => id);

  const handleSetDefault = () => {
    setStatusList([...StatusesListData]);
  };

  const handleOpenAddStatusForm = () => {
    setFormType("create");
    setOpenPopUp(true);
  };

  const handleAddStatus = (data: {
    name: string;
    votable: boolean;
    showOnRoadmap: boolean;
    privacy: boolean;
    color: string;
  }) => {
    setStatusList([...statusList, { ...data, id: Math.max(...ids) + 1 }]);
  };

  const handleOpenEditStatusForm = (id: number) => {
    setEditStatusIndex(statusList.findIndex((status) => status.id === id));
    setFormType("edit");
    setOpenPopUp(true);
  };

  const handleEditStatus = (data: {
    name: string;
    votable: boolean;
    showOnRoadmap: boolean;
    privacy: boolean;
    color: string;
  }) => {
    const status = statusList[editStatusIndex];
    status.name = data.name;
    status.privacy = data.privacy;
    status.votable = data.votable;
    status.showOnRoadmap = data.showOnRoadmap;
    status.color = data.color;
    setStatusList([...statusList]);
  };

  const handleDeleteStatus = (id: number) => {
    const deletedIndex = statusList.findIndex((status) => status.id === id);
    statusList.splice(deletedIndex, 1);
    setStatusList([...statusList]);
  };

  return (
    <>
      <PopUp addClass="statuses__pop-up">
        <CreateForm
          formData={
            formType === "create"
              ? { id: 0, name: "", votable: true, showOnRoadmap: true, privacy: false, color: "#43A047" }
              : statusList.length > 0
              ? statusList[editStatusIndex]
              : { id: 0, name: "", votable: true, showOnRoadmap: true, privacy: false, color: "#43A047" }
          }
          formTitle={formType === "create" ? "Add user segment" : "Edit user segment"}
          formType={formType === "create" ? "create" : "edit"}
          submitSuccess={formType === "create" ? handleAddStatus : handleEditStatus}
        />
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["Statuses"]} currentLink={["/statuses"]} />

        <div className="pageContainer-MainSection__top pageContainerStatuses-MainSection__top">
          <h1 className="title statuses-MainSection__title">Statuses</h1>

          <div className="statuses__buttons-header">
            <button className="statuses__button subtitle-second" onClick={handleSetDefault}>
              <img
                className="statuses__button-icon"
                src={undo}
                alt="reset to default icon"
                width="24"
                height="24"
                aria-hidden="true"
                loading="lazy"
              />
              Reset to default
            </button>

            <Button type="primary" click={handleOpenAddStatusForm}>
              Add status
            </Button>
          </div>
        </div>

        <section className="statuses pageContainer-section">
          <p className="visibility-hidden">statuses list</p>

          <div className="statuses__header">
            <h2 className="statuses__caption subtitle">Name</h2>

            <h2 className="statuses__caption subtitle">
              Votable
              <img
                className="statuses__caption-icon"
                src={info}
                alt="Votable icon"
                width="16"
                height="16"
                aria-hidden="true"
                loading="lazy"
              />
            </h2>

            <h2 className="statuses__caption subtitle">Show on roadmap</h2>

            <h2 className="statuses__caption subtitle">Privacy</h2>

            <h2 className="statuses__caption subtitle">Color</h2>
          </div>

          <Reorder.Group
            className="statuses__list"
            axis="y"
            values={statusList}
            onReorder={(statuses) => {
              setStatusList(statuses);
            }}
          >
            {statusList.slice(0, 9).map((status) => (
              <StatusesItem
                key={status.id}
                data={status}
                handleEdit={handleOpenEditStatusForm}
                handleDelete={handleDeleteStatus}
              />
            ))}
          </Reorder.Group>
        </section>
      </section>
    </>
  );
};

export default Statuses;
