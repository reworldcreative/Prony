import React, { FC, useState } from "react";
import "./ClientBoards.scss";
import Search from "@/components/UI/forms/Search/Search";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import Pagination from "@/components/UI/Pagination/Pagination";
import ClientBoardsList from "@/data/ClientBoards.json";
import like from "@icons/menu/like.svg";
import message from "@icons/menu/message.svg";
import { Link } from "react-router-dom";

export interface ClientBoardsData {
  title: string;
  label: string;
  text: string;
  likes: number;
  comments: number;
}

const labelsData = [
  {
    name: "Complete",
    color: "#43A047",
  },
  {
    name: "In progress",
    color: "#F2C94C",
  },
  {
    name: "Planned",
    color: "#03B8FD",
  },
];

const ClientBoards: FC = () => {
  const [BoardsList, setBoardsList] = useState<ClientBoardsData[]>([...ClientBoardsList]);
  const [perPage, setPerPage] = useState<string>("10");
  const boardsPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastBoards: number = currentPage * boardsPerPage;
  const indexOfFirstBoards: number = indexOfLastBoards - boardsPerPage;
  const currentBoards = BoardsList.slice(indexOfFirstBoards, indexOfLastBoards);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(BoardsList.length / boardsPerPage) && setCurrentPage(pageNumber);
  };
  return (
    <div className="client-boards">
      <section className="client-boards__search">
        <Search name="client-boards-search" addClass="client-boards__search-input" placeholder="Search" />

        <div className="client-boards__search_row">
          <div className="client-boards__search-block">
            <p className="text-second client-boards__label">Sort by:</p>
            <Dropdown
              addClass="client-boards__dropdown"
              options={["Trending", "New", "Old"]}
              onSelect={() => {}}
              current="Trending"
            />
          </div>

          <div className="client-boards__search-block">
            <p className="text-second client-boards__label">Showing:</p>
            <Dropdown
              addClass="client-boards__dropdown"
              options={["My posts", "Viewers posts"]}
              onSelect={() => {}}
              current="My posts"
            />
          </div>
        </div>

        <div className="client-boards__search_row">
          <div className="client-boards__search-block">
            <p className="text-second client-boards__label">Showing:</p>
            <Dropdown
              addClass="client-boards__dropdown"
              options={["Trending", "New", "Old"]}
              onSelect={() => {}}
              current="Trending"
            />
          </div>
          <div className="client-boards__search-block">
            <p className="text-second client-boards__label">Showing:</p>
            <Dropdown
              addClass="client-boards__dropdown"
              options={["My posts", "Viewers posts"]}
              onSelect={() => {}}
              current="My posts"
            />
          </div>
        </div>

        <button className="client-boards__clear">Clear filters</button>
      </section>

      <div>
        <section className="client-boards__list">
          {currentBoards.map((item, index) => (
            <Link to={"/workspace/client-post"} className="client-boards__item" key={index}>
              <div className="client-boards__likes-container">
                <img
                  src={like}
                  className="client-boards__icon"
                  alt="like icon"
                  width="14"
                  height="14"
                  aria-hidden="true"
                />
                <p className="client-boards__likes">{item.likes}</p>
              </div>

              <div>
                <p className="client-boards__title">{item.title}</p>
                <div className="client-boards__list-label">
                  <span
                    className="client-boards__marker"
                    style={{ background: labelsData.find((option) => option.name === item.label)?.color }}
                  />
                  {item.label}
                </div>
                <p className="client-boards__text">{item.text}</p>
              </div>

              <div className="client-boards__messages-container">
                <img
                  src={message}
                  className="client-boards__icon"
                  alt="message icon"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <p className="client-boards__messages">{item.comments}</p>
              </div>
            </Link>
          ))}
        </section>

        <Pagination
          addClass="client-boards__pagination"
          paginate={paginate}
          currentPage={currentPage}
          totalPages={Math.ceil(BoardsList.length / boardsPerPage)}
        />
      </div>
    </div>
  );
};

export default ClientBoards;
