import React, { FC, useContext, useEffect, useState } from "react";
import "./ClientAvatarForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import clip from "@/assets/img/icons/clip.svg";
import FormButtons from "../FormButtons/FormButtons";
import PictureComponent from "@/../plugins/PictureComponent";

interface formProps {
  submitSuccess: () => void;
  formTitle: string;
}

const ClientAvatarForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { theme, isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [avatar, setAvatar] = useState<string>("./img/avatars/avatar_1.jpg");
  const [fileName, setFileName] = useState<string>(avatar);

  const checkFileExtension = (fileName: string) => {
    const fileNameSplit = fileName.split(".");
    const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
    return ["jpg", "jpeg", "png", "gif"].includes(fileExtension);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files[0];
    checkFileExtension(selectedFile.name) ? setFileName(URL.createObjectURL(selectedFile)) : null;
  };

  const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    checkFileExtension(file.name) ? setFileName(URL.createObjectURL(file)) : null;
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = () => {
    setAvatar(fileName);
    setOpenPopUp(false);
    reset();
  };

  const onCancel = () => {
    setOpenPopUp(false);
    reset();
  };

  useEffect(() => {
    setFileName(avatar);
  }, [isOpenPopUp]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-avatar-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="workspaces-form__wrapper workspaces-avatar-form__wrapper">
        <p className="workspaces-avatar-form__text text-second ">Current avatar</p>

        <div className="workspaces-avatar-form__avatar-wrapper">
          <PictureComponent
            src={fileName}
            alt="avatar"
            className="workspaces-avatar-form__avatar"
            width="176"
            height="176"
          />

          <div className="file-loader__wrapper" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="file-loader__label text">
              <img
                className={`file-loader__icon ${theme}`}
                src={clip}
                alt="clip icon"
                width="16"
                height="16"
                aria-hidden="true"
              />
              <label htmlFor="avatarLoader" className="file-loader__link">
                Add file&#160;
              </label>
              or drop files here
            </div>
            <input
              type="file"
              className="file-loader__input visibility-hidden"
              id="avatarLoader"
              name="avatar-file-loader"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
        </div>
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default ClientAvatarForm;
