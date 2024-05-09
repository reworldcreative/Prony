import React, { FC, useContext } from "react";
import "./WorkspaceItem.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import EditForm from "../forms/EditForm/EditForm";
import DeleteForm from "../forms/DeleteForm/DeleteForm";
import { Link } from "react-router-dom";

export interface WorkspaceItemData {
  id: number;
  name: string;
  domain: string;
  language: string;
  theme: string;
  plan: string;
}

interface WorkspaceItemProps {
  data: WorkspaceItemData;
  EditWorkspace: (data: WorkspaceItemData) => void;
  DeleteWorkspace: (name: string) => void;
}

const WorkspaceItem: FC<WorkspaceItemProps> = ({ data, EditWorkspace, DeleteWorkspace }) => {
  const { isOpenPopUp, setOpenPopUp, popUpData, setPopUpData } = useContext(GlobalContext);

  const MenuButtons = [
    {
      icon: "./img/icons/menu/pen.svg",
      text: "Edit board ",
      onClick: () => {
        handleOpenEditPopUp();
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      text: "Delete board",
      onClick: () => {
        handleOpenDeletePopUp();
      },
    },
    { icon: "./img/icons/menu/play.svg", text: "View board", url: "/workspace" },
  ];

  const handleOpenEditPopUp = () => {
    setPopUpData(<EditForm formData={data} submitSuccess={EditWorkspace} formTitle="Edit Workspace" />);
    setOpenPopUp(true);
  };

  const handleOpenDeletePopUp = () => {
    setPopUpData(<DeleteForm submitSuccess={DeleteWorkspace} formTitle="DELETE Workspace" />);
    setOpenPopUp(true);
  };

  return (
    <div className="workspace__item">
      <p className="workspace__title">{data.name}</p>
      <p className="workspace__domain">{data.domain}</p>

      <div className="workspace__menu">
        {MenuButtons.map((button, index) =>
          button.url ? (
            <Link to={button.url} className="workspace__button" key={index}>
              <img
                src={button.icon}
                className={`workspace__icon ${index !== MenuButtons.length - 1 ? "workspace__icon-second" : ""}`}
                alt={button.text}
                aria-hidden="true"
                width="20"
                height="20"
              />
            </Link>
          ) : (
            <button onClick={button.onClick} className="workspace__button" key={index}>
              <img
                src={button.icon}
                className={`workspace__icon ${index !== MenuButtons.length - 1 ? "workspace__icon-second" : ""}`}
                alt={button.text}
                aria-hidden="true"
                width="20"
                height="20"
              />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default WorkspaceItem;
