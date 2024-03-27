import React, { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostVoters.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import PopUp from "@/components/widgets/PopUp/PopUp";
import PostVotersItem from "./PostVotersItem/PostVotersItem";
import Pagination from "@/components/UI/Pagination/Pagination";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import votersData from "@/data/Voters.json";
import postsData from "@/data/Posts.json";

import exportIcon from "@/assets/img/icons/posts/export.svg";

const PostVoters: FC = () => {
  const { id } = useParams();
  const post = postsData.find((post) => post.id === Number(id));
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [deletedId, setDeletedId] = useState(0);
  const [votersList, setVotersList] = useState([...votersData]);

  const handleDeleteForm = (id: number) => {
    setDeletedId(id);
    setOpenPopUp(true);
  };

  const handleDeleteVoter = () => {
    setVotersList(votersList.filter((voter) => voter.id !== deletedId));
    setOpenPopUp(false);
  };

  return (
    <>
      <PopUp addClass="postVoters__delete-pop-up">
        <div className="postVoters__delete">
          <p className="postVoters__delete-text heading-h6">Are you sure you would like to delete this vote?</p>
          <FormButtons
            type="danger"
            isValid={true}
            onCancel={() => {
              setOpenPopUp(false);
            }}
            onSubmit={handleDeleteVoter}
          />
        </div>
      </PopUp>
      <section className="pageContainer-MainSection">
        <Breadcrumbs
          currentTitle={["Post view", "Post voters"]}
          currentLink={[`/post-view/${id}`, `/post-voters/${id}`]}
        />

        <div className="pageContainer-MainSection__top">
          <h1 className="title posts-MainSection__title postVoters-MainSection__title">
            Voters for <span className="title-second">“{post?.title}”</span>
          </h1>

          <button className="load-button subtitle-second" aria-label="export">
            <img src={exportIcon} alt="export icon" width="14" height="17" aria-hidden="true" />
            Export
          </button>
        </div>

        <section className="pageContainer-section postVoters__section">
          <div className="postVoters__list">
            {votersList.map((voter) => (
              <PostVotersItem
                key={voter.id}
                id={voter.id}
                onDelete={handleDeleteForm}
                name={voter.name}
                icon={voter.icon}
                time={voter.time}
              />
            ))}
          </div>

          <Pagination addClass="postVoters__pagination" currentPage={1} totalPages={10} paginate={() => {}} />
        </section>
      </section>
    </>
  );
};

export default PostVoters;
