import React, { FC, useContext, useState } from "react";
import { Reorder } from "framer-motion";
import "./Segments.scss";
import PopUp from "@/components/widgets/PopUp/PopUp";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import SegmentsItem, { SegmentsItemData } from "./SegmentsItem/SegmentsItem";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import segmentsListData from "@/data/Segments.json";
import CreateForm from "./forms/CreateForm/CreateForm";

const Segments: FC = () => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [formType, setFormType] = useState<"create" | "edit">("create");
  const [editSegmentIndex, setEditSegmentIndex] = useState<number>(0);
  const [segmentsList, setSegmentsList] = useState<SegmentsItemData[]>([...segmentsListData]);
  const ids = segmentsList.map(({ id }) => id);

  const handleOpenAddSegmentForm = () => {
    setFormType("create");
    setOpenPopUp(true);
  };

  const handleAddSegment = (data: { name: string; representation: string }) => {
    setSegmentsList([...segmentsList, { ...data, id: Math.max(...ids) + 1 }]);
  };

  const handleOpenEditSegmentForm = (id: number) => {
    setEditSegmentIndex(segmentsList.findIndex((segment) => segment.id === id));
    setFormType("edit");
    setOpenPopUp(true);
  };

  const handleEditSegment = (data: { id: string; name: string; representation: string }) => {
    const segment = segmentsList[editSegmentIndex];
    segment.name = data.name;
    segment.representation = data.representation;
    setSegmentsList([...segmentsList]);
  };

  const handleDeleteSegment = (id: number) => {
    const deletedIndex = segmentsList.findIndex((segment) => segment.id === id);
    segmentsList.splice(deletedIndex, 1);
    setSegmentsList([...segmentsList]);
  };

  return (
    <>
      <PopUp addClass="segments__pop-up">
        <CreateForm
          formData={
            formType === "create"
              ? { id: 0, name: "", representation: "company is “value”" }
              : segmentsList.length > 0
              ? segmentsList[editSegmentIndex]
              : { id: 0, name: "", representation: "company is “value”" }
          }
          formTitle={formType === "create" ? "Add user segment" : "Edit user segment"}
          formType={formType === "create" ? "create" : "edit"}
          submitSuccess={formType === "create" ? handleAddSegment : handleEditSegment}
        />
      </PopUp>

      <section className="pageContainer-MainSection">
        <Breadcrumbs currentTitle={["User Segments"]} currentLink={["/segments"]} />

        <div className="pageContainer-MainSection__top pageContainerSegments-MainSection__top">
          <h1 className="title posts-MainSection__title">User Segments</h1>

          <Button type="primary" click={handleOpenAddSegmentForm}>
            Add new segment
          </Button>
        </div>

        <section className="segments pageContainer-section">
          <p className="visibility-hidden">segments list</p>

          <div className="segments__header">
            <h2 className="segments__caption subtitle">Name</h2>
            <h2 className="segments__caption subtitle">String representation</h2>
          </div>

          <Reorder.Group
            className="segments__list"
            axis="y"
            values={segmentsList}
            onReorder={(segments) => {
              setSegmentsList(segments);
            }}
          >
            {segmentsList.slice(0, 9).map((segment) => (
              <SegmentsItem
                key={segment.id}
                data={segment}
                handleEdit={handleOpenEditSegmentForm}
                handleDelete={handleDeleteSegment}
              />
            ))}
          </Reorder.Group>
        </section>
      </section>
    </>
  );
};

export default Segments;
