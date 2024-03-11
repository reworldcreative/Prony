import React, { FC, useState } from "react";
import "./EditPost.scss";
import Input from "@/components/UI/forms/Input/Input";
import Switch from "@/components/UI/forms/Switch/Switch";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import cancelIcon from "@/assets/img/icons/cancel.svg";
import TextArea from "@/components/UI/forms/TextArea/TextArea";

interface EditPostItemProps {
  type: "text" | "multi" | "select";
  title: string;
}

const EditPostItem: FC<EditPostItemProps> = ({ type = "text", title }) => {
  const [isPrivate, setIsPrivate] = useState(`${title}-public`);

  const handleSetPrivate = (value: string) => {
    setIsPrivate(value);
  };
  return (
    <fieldset className="editPostForm__item">
      <div className="drag dragOn editPostForm__item_drag">
        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>

        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <div className="editPostForm__inputBlocks">
        <Input label="" name={`post${title}`} placeholder={title} />
        {type === "text" && <Input label="" name={`post${title}-text`} placeholder={`Enter ${title}`} />}
        {type === "multi" && <TextArea label="" name={`post${title}-text`} rows={4} placeholder={`Enter ${title}`} />}
      </div>

      <div className="editPostForm__container">
        <div className="editPostForm__block">
          <Switch labelText="Required" value={`${title}-required`} name="required" type="secondary" size="big" />

          <div>
            <p className="text">Privacy</p>

            <div className="editPostForm__privacy">
              <RadioButton
                group="privacy"
                labelText="Public"
                value={`${title}-public`}
                selectedValue={isPrivate}
                size="big"
                type="secondary"
                getRadioValue={handleSetPrivate}
              />

              <RadioButton
                group="privacy"
                labelText="Private"
                value={`${title}-private`}
                selectedValue={isPrivate}
                size="big"
                type="secondary"
                getRadioValue={handleSetPrivate}
              />
            </div>
          </div>
        </div>

        <button className="editPostForm__cancel" type="button" aria-label="remove field">
          <img src={cancelIcon} alt="close" width="20" height="20" aria-hidden="true" />
        </button>
      </div>
    </fieldset>
  );
};

export default EditPostItem;
