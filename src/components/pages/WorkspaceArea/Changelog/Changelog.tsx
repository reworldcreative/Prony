import React, { FC, useState } from "react";
import "./Changelog.scss";
import ChangelogDropdown, { options } from "./ChangelogDropdown/ChangelogDropdown";
import PictureComponent from "@/../plugins/PictureComponent";
import ChangelogsClient from "@/data/ChangelogsClient.json";
import Pagination from "@/components/UI/Pagination/Pagination";

interface ChangelogData {
  title: string;
  label: string;
  avatar: string;
  name: string;
  data: string;
  text: string;
}

const Changelog: FC = () => {
  const [currentSort, setCurrentSort] = useState("New");
  const [ChangelogsList, setChangelogsList] = useState<ChangelogData[]>([...ChangelogsClient]);

  const [perPage, setPerPage] = useState<string>("10");
  const changelogsPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastChangelog: number = currentPage * changelogsPerPage;
  const indexOfFirstChangelog: number = indexOfLastChangelog - changelogsPerPage;
  const currentChangelogs = ChangelogsList.slice(indexOfFirstChangelog, indexOfLastChangelog);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(ChangelogsList.length / changelogsPerPage) && setCurrentPage(pageNumber);
  };

  return (
    <div className="changelogClient">
      <section className="changelogClient__sort">
        <ChangelogDropdown
          current={currentSort}
          onSelect={() => {
            setCurrentSort;
          }}
        />
      </section>

      <section className="changelogClient__list">
        {currentChangelogs.map((item, index) => (
          <div className="changelogClient__item" key={index}>
            <p className="changelogClient__title">{item.title}</p>
            <div
              className="text-second changelogClient__label"
              style={{ background: options.filter((option) => option.name === item.label)[0].color }}
            >
              {item.label}
            </div>

            <div className="changelogClient__wrapper">
              <PictureComponent src={item.avatar} className="changelogClient__avatar" width="34" height="34" />

              <div className="changelogClient__container">
                <div className="changelogClient__top">
                  <p className="changelogClient__name">{item.name}</p>
                  <p className="changelogClient__date">{item.data}</p>
                </div>

                <p className="changelogClient__text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Pagination
        addClass="changelogClient__pagination"
        paginate={paginate}
        currentPage={currentPage}
        totalPages={Math.ceil(ChangelogsList.length / changelogsPerPage)}
      />
    </div>
  );
};

export default Changelog;
