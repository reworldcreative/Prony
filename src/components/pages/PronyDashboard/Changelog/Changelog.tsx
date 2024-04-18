import React, { FC, useContext, useEffect, useState } from "react";
import "./Changelog.scss";
import PopUp from "@/components/widgets/PopUp/PopUp";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";
import Marker from "../Posts/Marker/Marker";
import PerPage from "../Posts/PerPage";
import ChangelogItem, { ChangelogItemData } from "./ChangelogItem/ChangelogItem";
import ChangelogsData from "@/data/Changelogs.json";
import Pagination from "@/components/UI/Pagination/Pagination";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./forms/CreateForm";
import ChangelogsLabels from "@/data/ChangelogsLabels.json";

const Changelog: FC = () => {
  const [changelogsList, setChangelogsList] = useState<ChangelogItemData[]>([...ChangelogsData]);

  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [formType, setFormType] = useState<"create" | "edit">("create");
  const [editChangelogsIndex, setChangelogsIndex] = useState<number>(0);
  const ids = changelogsList.map(({ id }) => id);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataTime, setDataTime] = useState<string>("");
  const [perPage, setPerPage] = useState<string>("10");

  const changelogsPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastChangelog: number = currentPage * changelogsPerPage;
  const indexOfFirstChangelog: number = indexOfLastChangelog - changelogsPerPage;
  const currentChangelogs = changelogsList.slice(indexOfFirstChangelog, indexOfLastChangelog);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(changelogsList.length / changelogsPerPage) && setCurrentPage(pageNumber);
  };

  useEffect(() => {
    paginate(currentPage > Math.ceil(changelogsList.length / changelogsPerPage) ? currentPage - 1 : currentPage);
  }, [changelogsList]);

  const handleOpenAddChangelogForm = () => {
    setFormType("create");
    setOpenPopUp(true);
  };

  const handleAddChangelog = (data: ChangelogItemData) => {
    setChangelogsList([...changelogsList, { ...data, id: Math.max(...ids) + 1 }]);
  };

  const handleOpenEditChangelogForm = (id: number) => {
    setChangelogsIndex(changelogsList.findIndex((changelog) => changelog.id === id));
    setFormType("edit");
    setOpenPopUp(true);
  };

  const handleEditChangelog = (data: ChangelogItemData) => {
    const segment = changelogsList[editChangelogsIndex];
    segment.title = data.title;
    segment.time = data.time;
    segment.tags = data.tags;
    segment.details = data.details;
    segment.image = data.image;
    setChangelogsList([...changelogsList]);
  };

  const handleDeleteChangelog = (id: number) => {
    const deletedIndex = changelogsList.findIndex((changelog) => changelog.id === id);
    changelogsList.splice(deletedIndex, 1);
    setChangelogsList([...changelogsList]);
  };

  return (
    <>
      <PopUp addClass="changelog__pop-up">
        <CreateForm
          formData={
            formType === "create"
              ? { id: 0, title: "", time: "", tags: [], details: "", image: "" }
              : changelogsList.length > 0
              ? changelogsList[editChangelogsIndex]
              : { id: 0, title: "", time: "", tags: [], details: "", image: "" }
          }
          formTitle={formType === "create" ? "Add record" : "Edit record"}
          formType={formType === "create" ? "create" : "edit"}
          submitSuccess={formType === "create" ? handleAddChangelog : handleEditChangelog}
        />
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["Changelog"]} currentLink={["/changelog"]} />

        <div className="pageContainer-MainSection__top pageContainerChangelog-MainSection__top">
          <h1 className="title posts-MainSection__title">Changelog records</h1>

          <Button type="primary" click={handleOpenAddChangelogForm}>
            Add record
          </Button>
        </div>

        <section className="changelog pageContainer-section">
          <div className="changelog__top">
            <div className="changelog__selectors">
              <DropdownSelect
                getValue={setLabels}
                defaultValue={labels}
                selectType="checkbox"
                title={"Labels"}
                marked={true}
                options={ChangelogsLabels.map((label, index) => ({
                  key: index,
                  name: label.name,
                  labelText: label.name,
                }))}
              />

              <DropdownSelect
                getValue={(value) => {
                  setDataTime(value[0]);
                }}
                defaultValue={[dataTime]}
                selectType="calendar"
                title={"Publish time"}
                marked={true}
                options={[]}
              />
            </div>

            {labels && (
              <div className="changelog__markersContainer">
                {labels.map((label, index) => (
                  <Marker
                    name={label}
                    key={index}
                    color="info"
                    type="remove"
                    removeItem={() => {
                      setLabels(labels.filter((_, currentIndex) => currentIndex !== index));
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="changelog__list-top">
            <PerPage current={perPage} onSelect={setPerPage} />

            <div className="changelog__list-header">
              <h2 className="changelog__caption subtitle">Title</h2>
              <h2 className="changelog__caption subtitle">Publish time</h2>
              <h2 className="changelog__caption subtitle">Labels</h2>
            </div>
          </div>

          <div className="changelog__list">
            {currentChangelogs.map((changelog, index) => (
              <ChangelogItem
                key={index}
                data={changelog}
                handleDelete={handleDeleteChangelog}
                handleEdit={handleOpenEditChangelogForm}
              />
            ))}
          </div>

          <div className="changelog__list-bottom">
            <Pagination
              paginate={paginate}
              currentPage={currentPage}
              totalPages={Math.ceil(changelogsList.length / changelogsPerPage)}
            />

            <PerPage current={perPage} onSelect={setPerPage} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Changelog;
