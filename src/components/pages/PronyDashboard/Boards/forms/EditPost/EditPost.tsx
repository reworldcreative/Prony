import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./EditPost.scss";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "@/components/UI/buttons/Button/Button";
import EditPostItem from "./EditPostItem";
import AddFieldItem from "./AddFieldItem";
import closeIcon from "@/assets/img/icons/close.svg";

interface formProps {
  submitSuccess: (name: string) => void;
  formTitle: string;
}

const EditPost: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { isOpenPopUp, setOpenPopUp, theme } = useContext(GlobalContext);
  const onCancel = () => {
    setOpenPopUp(false);
  };
  const [isOpenAddField, setIsOpenAddField] = useState(false);

  const handleOpenAddField = () => {
    setIsOpenAddField(true);
  };

  const handleClickOutside = () => {
    if (isOpenAddField) {
      setIsOpenAddField(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`addField ${isOpenAddField ? "addField_open" : ""}`}>
        <button className={`closeButton closeButton_${theme}`} onClick={handleClickOutside}>
          <img src={closeIcon} alt="close" width="24" height="24" aria-hidden="true" loading="lazy" />
        </button>
        <div className="addField__block">
          <AddFieldItem title="Select" text="Allows to select a value from the list of predefined values" />
          <AddFieldItem title="Multi select" text="Tag posts with one or more values from a list of options" />
          <AddFieldItem title="Text" text="Store any additional text data such as names, emails, links" />
          <AddFieldItem title="Date" text="Add a ETA to any post" />
          <AddFieldItem title="Captcha" text="Defend your board against spam" />
        </div>
        <Button type="primary" click={handleClickOutside}>
          Submit
        </Button>
      </div>

      <form
        className="editPostForm"
        onClick={() => {
          handleClickOutside();
        }}
      >
        <div className="pageContainer-MainSection__top">
          <h2 className="editPostForm__title title">{formTitle}</h2>
          <Button type="primary" click={handleOpenAddField}>
            Add field
          </Button>
        </div>

        <EditPostItem type="text" title="Title" />
        <EditPostItem type="multi" title="Details" />

        <FormButtons isValid={true} onCancel={onCancel} type="primary" />
      </form>
    </>
  );
};

export default EditPost;
