import React, { FC, useState } from "react";
import "./Boards.scss";
import { Reorder } from "framer-motion";
import Header from "@/components/widgets/Header/Header";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import BoardsItem, { BoardsItemProps } from "./BoardsItem";
import boardsData from "@/data/Boards.json";

const Boards: FC = () => {
  const [boards, setBoards] = useState(boardsData);

  const canMove = (newBoards: BoardsItemProps[]) => {
    let newList: BoardsItemProps[] = [];
    let canMove: boolean = true;
    for (let index = 0; index < boards.length; index++) {
      const element = boards[index];
      canMove = true;
      if (element.draggable === false && newBoards[index].id !== element.id) {
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
    boards[index].draggable = lock;
  };

  return (
    <>
      <Header />
      <div className="pageContainer">
        <AsideMenu />
        <main className="pageContainer__main">
          <section className="board-MainSection">
            <Breadcrumbs />

            <div className="board-MainSection__top">
              <h1 className="title board-MainSection__title">Boards</h1>
              <Button type="primary">Create Board</Button>
            </div>

            <section className="boards">
              <div className="boards__header">
                <h2 className="boards__caption subtitle">Name</h2>
                <h2 className="boards__caption subtitle">Posts</h2>
              </div>

              <Reorder.Group
                className="boards__list"
                axis="y"
                values={boards}
                // onReorder={setBoards}
                onReorder={(Boards) => {
                  handleReorder(Boards);
                }}
              >
                {boards.map((board, index) => (
                  <BoardsItem
                    item={board}
                    key={index}
                    lockItem={lockItem.bind(null, index)}
                  />
                ))}
              </Reorder.Group>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Boards;
