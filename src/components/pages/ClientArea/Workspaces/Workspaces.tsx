import React, { FC, useContext, useEffect, useState } from "react";
import "./Workspaces.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import WorkspaceItem, { WorkspaceItemData } from "./WorkspaceItem/WorkspaceItem";
import WorkspacesData from "@/data/Workspaces.json";
import Button from "@/components/UI/buttons/Button/Button";
import plusIcon from "@icons/plus.svg";

const Workspaces: FC = () => {
  const {
    breadcrumbsLinks,
    setBreadcrumbsLinks,
    breadcrumbsTitles,
    setBreadcrumbsTitles,
    isOpenPopUp,
    setOpenPopUp,
    popUpData,
    setPopUpData,
  } = useContext(GlobalContext);
  const [WorkspacesList, setWorkspacesList] = useState<WorkspaceItemData[]>([...WorkspacesData]);

  useEffect(() => {
    setBreadcrumbsLinks(["/client"]);
    setBreadcrumbsTitles(["Workspaces"]);
  }, []);

  const handleEditWorkspace = (data: WorkspaceItemData) => {
    const editId = WorkspacesList.findIndex((workspace) => workspace.id === data.id);
    WorkspacesList[editId] = data;
    setWorkspacesList([...WorkspacesList]);
  };

  const handleDeleteWorkspace = (name: string) => {
    const newWorkspacesArray = WorkspacesList.filter(
      (workspace) => workspace.name.toLowerCase().trim() !== name.toLowerCase().trim()
    );
    setWorkspacesList(newWorkspacesArray);
  };

  return (
    <div className="workspaces">
      <h1 className="workspaces__title clientPage__main-title title">Workspaces</h1>

      <div className="workspaces__list">
        {WorkspacesList.map((workspace) => (
          <WorkspaceItem
            data={workspace}
            key={workspace.id}
            EditWorkspace={handleEditWorkspace}
            DeleteWorkspace={handleDeleteWorkspace}
          />
        ))}
      </div>

      <Button click={() => setOpenPopUp(true)} type="primary" buttonType="button" addClass="workspaces__button">
        <img
          src={plusIcon}
          alt="plus icon"
          className="workspaces__button-icon"
          width="15"
          height="15"
          aria-hidden="true"
        />
        Add a new workspace
      </Button>
    </div>
  );
};

export default Workspaces;
