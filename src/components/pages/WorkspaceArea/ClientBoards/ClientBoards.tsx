import React, { FC } from "react";
import "./ClientBoards.scss";
import Search from "@/components/UI/forms/Search/Search";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";

const ClientBoards: FC = () => {
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
    </div>
  );
};

export default ClientBoards;
