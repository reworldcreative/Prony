import React, { FC, useContext, useState } from "react";
import "./Boards.scss";
import { Reorder } from "framer-motion";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import BoardsItem, { BoardsItemProps } from "./BoardsItem";
import boardsData from "@/data/Boards.json";
import Info from "@/components/widgets/Info/Info";
import PopUp from "@/components/widgets/PopUp/PopUp";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./forms/CreateForm/CreateForm";
import { FieldValues } from "react-hook-form";
import DeleteForm from "./forms/DeleteForm/DeleteForm";
import EditPost from "./forms/EditPost/EditPost";

type BoardMessageType = {
  visible: boolean;
  text: string;
  type: "success" | "danger";
};

const initialBoardMessageState: BoardMessageType = {
  visible: false,
  text: "This is a success message!",
  type: "success",
};

type PopUpData = {
  title: string;
  type: "create" | "edit" | "delete" | "editPost" | "";
  formData?: BoardsItemProps;
};

export { PopUpData };

const Boards: FC = () => {
  const [boards, setBoards] = useState(boardsData);
  const [boardMessage, setBoardMessage] = useState<BoardMessageType>(initialBoardMessageState);
  const defaultBoardsItem: BoardsItemProps = {
    id: 0,
    name: "",
    posts: 0,
    locked: false,
    privacy: false,
    On_roadmap: false,
    Indexed: false,
    Post_pre_approval: false,
    Anonymous_voting: false,
    URL: "",
    description: "",
  };
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [PopUpData, setPopUpData] = useState<PopUpData>({
    title: "",
    type: "create",
    formData: defaultBoardsItem,
  });

  const canMove = (newBoards: BoardsItemProps[]) => {
    let newList: BoardsItemProps[] = [];
    let canMove: boolean = true;

    for (let index = 0; index < boards.length; index++) {
      const element = boards[index];
      canMove = true;

      if (element.locked === false && newBoards[index].id !== element.id) {
        canMove = false;
        break;
      } else {
        newList.push(newBoards[index]);
      }
    }

    return canMove ? [...newList] : [...boards];
  };

  const handleReorder = (newBoards: BoardsItemProps[]) => {
    setBoards(canMove(newBoards));
  };

  const lockItem = (index: number, lock: boolean) => {
    boards[index].locked = lock;
  };

  const handleOpenCreateBoardPopUp = () => {
    setPopUpData({
      title: "Create board",
      type: "create",
    });
    setOpenPopUp(true);
  };

  const handleEditBoard = (data: FieldValues) => {
    const editBoardIndex = boards.findIndex((board) => board.id === data.id);
    const newItem: BoardsItemProps = {
      id: data.id,
      name: data.boardName,
      posts: data.posts,
      locked: data.status === "locked" ? true : false,
      privacy: data.privacy === "private" ? true : false,
      Anonymous_voting: data.Anonymous_voting,
      Indexed: data.Indexed,
      On_roadmap: data.On_roadmap,
      Post_pre_approval: data.Post_pre_approval,
      URL: data.URL,
      description: data.description,
    };

    boards[editBoardIndex] = newItem;
  };

  const handleSetPopUpData = (data: PopUpData) => {
    setPopUpData({
      title: data.title,
      type: data.type,
      formData: data.formData,
    });
    setOpenPopUp(true);
  };

  const showMessage = (text: string, type: "success" | "danger") => {
    const newBoardMessage: BoardMessageType = {
      ...boardMessage,
      visible: true,
      text: text,
      type: type,
    };
    setBoardMessage(newBoardMessage);

    setTimeout(() => {
      const hiddenBoardMessage: BoardMessageType = {
        ...newBoardMessage,
        visible: false,
      };

      setBoardMessage(hiddenBoardMessage);
    }, 5000);
  };

  const handleCreateNewBoard = (data: FieldValues) => {
    const ids = boards.map(({ id }) => id);
    const newItem: BoardsItemProps = {
      id: Math.max(...ids) + 1,
      name: data.boardName,
      posts: 0,
      locked: data.status === "locked" ? true : false,
      privacy: data.privacy === "private" ? true : false,
      Anonymous_voting: data.Anonymous_voting,
      Indexed: data.Indexed,
      On_roadmap: data.On_roadmap,
      Post_pre_approval: data.Post_pre_approval,
      URL: data.URL,
      description: data.description,
    };
    boards.push(newItem);
    showMessage("This is a success message!", "success");
  };

  const handleDeleteBoard = (name: string) => {
    const newBoardsArray = boards.filter((board) => board.name.toLowerCase().trim() !== name.toLowerCase().trim());
    setBoards(newBoardsArray);
    showMessage("Board has been deleted!", "danger");
  };

  const handleChangeItemPrivacy = (data: BoardsItemProps) => {
    const editBoardIndex = boards.findIndex((board) => board.id === data.id);
    const newItem: BoardsItemProps = {
      ...boards[editBoardIndex],
      privacy: !boards[editBoardIndex].privacy,
    };
    boards[editBoardIndex] = newItem;
    setBoards([...boards]);
  };

  return (
    <>
      <PopUp>
        {(PopUpData.type === "create" || PopUpData.type === "edit") && (
          <CreateForm
            submitSuccess={
              PopUpData.type === "create"
                ? handleCreateNewBoard
                : PopUpData.type === "edit"
                ? handleEditBoard
                : () => {}
            }
            formTitle={PopUpData.title}
            formData={PopUpData.type === "edit" ? PopUpData.formData : defaultBoardsItem}
            boardsData={boards}
            formType={PopUpData.type === "edit" ? "edit" : "create"}
          />
        )}

        {PopUpData.type === "delete" && <DeleteForm formTitle={PopUpData.title} submitSuccess={handleDeleteBoard} />}

        {PopUpData.type === "editPost" && <EditPost formTitle={PopUpData.title} submitSuccess={() => {}} />}
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle="Boards" currentLink="/boards" />

        <div className="pageContainer-MainSection__top">
          <h1 className="title board-MainSection__title">Boards</h1>

          <Button type="primary" click={handleOpenCreateBoardPopUp}>
            Create Board
          </Button>
        </div>

        <Info type={boardMessage.type} text={boardMessage.text} visible={boardMessage.visible} />

        <section className="boards">
          <p className="visibility-hidden">boards list</p>

          <div className="boards__header">
            <h2 className="boards__caption subtitle">Name</h2>
            <h2 className="boards__caption subtitle">Posts</h2>
          </div>

          <Reorder.Group
            className="boards__list"
            axis="y"
            values={boards}
            onReorder={(Boards) => {
              handleReorder(Boards);
            }}
          >
            {boards.map((board, index) => (
              <BoardsItem
                item={board}
                key={index}
                lockItem={lockItem.bind(null, index)}
                openPopUp={handleSetPopUpData}
                changePrivacy={handleChangeItemPrivacy}
              />
            ))}
          </Reorder.Group>
        </section>
      </section>
    </>
  );
};

export default Boards;
