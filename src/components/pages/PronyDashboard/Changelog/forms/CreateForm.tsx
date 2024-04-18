import React, { FC, useContext, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { ChangelogItemData } from "../ChangelogItem/ChangelogItem";
import Input from "@/components/UI/forms/Input/Input";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import FileLoader from "@/components/UI/forms/FileLoader/FileLoader";
import { DateTimeField, LocalizationProvider } from "@mui/x-date-pickers";
import calendar from "@icons/calendar.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import Marker from "../../Posts/Marker/Marker";
import ChangelogsLabels from "@/data/ChangelogsLabels.json";

interface formProps {
  submitSuccess: (data: ChangelogItemData) => void;
  formTitle: string;
  formData: ChangelogItemData;
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formType, formData }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [tags, setTags] = useState<{ name: string; color: string }[]>(formData.tags);

  const handleSetTags = (values: string[]) => {
    setTags(ChangelogsLabels.filter((item) => values.includes(item.name)));
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  useEffect(() => {
    setTags(formData.tags);
    setTime(formData.time);
    setTitle(formData.title);
    setDetails(formData.details);
    setImage(formData.image);

    setValue(
      "labels",
      formData.tags.map((tag) => tag.name)
    );
    setValue("time", formData.time);
    setValue("title", formData.title);
    setValue("details", formData.details);
    setValue("image", formData.image);
  }, [formData]);

  const onSubmit = (data: ChangelogItemData) => {
    submitSuccess(data);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form changelogForm">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="changelogForm__wrapper">
        <Input
          label="Title"
          name="title"
          register={register}
          messageType={errors.title ? "error" : ""}
          value={formData ? formData.title : ""}
          required={false}
          placeholder="Enter title"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 50, message: "Maximum length should be 30" },
          }}
          messageText={errors?.title?.message.toString() || "error!"}
        />

        <TextArea
          label="Details"
          name="details"
          rows={4}
          register={register}
          messageType={errors.details ? "error" : ""}
          value={formData ? formData.details : ""}
          placeholder="Enter details"
          settings={{
            required: false,
            minLength: { value: 10, message: "Minimum length should be 10" },
            maxLength: {
              value: 200,
              message: "Maximum length should be 200",
            },
          }}
          messageText={"must be longer than 10 and less than 200"}
        />

        <Controller
          control={control}
          name="image"
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => <FileLoader onSelect={onChange} type="image" />}
        />

        <Controller
          control={control}
          name="time"
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => (
            <div className="changelogForm__date">
              <p className="input__label text">Publish time</p>
              <div className="changelogForm__row-date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimeField onSelect={onChange} />
                </LocalizationProvider>

                <img src={calendar} className="date-icon" alt="date icon" width="24" height="24" aria-hidden="true" />
              </div>
            </div>
          )}
        />

        <Controller
          control={control}
          name="tags"
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => (
            <div className="changelogForm__tags">
              <p className="input__label text">Labels</p>
              <DropdownSelect
                getValue={handleSetTags}
                defaultValue={tags.map((tag) => tag.name).map((tag) => tag)}
                selectType="checkbox"
                title={"Chose a label"}
                marked={false}
                options={ChangelogsLabels.map((label, index) => ({
                  key: index,
                  name: label.name,
                  labelText: label.name,
                }))}
              />
            </div>
          )}
        />

        {tags && (
          <div className="changelogForm__markersContainer">
            {tags.map((tag, index) => (
              <Marker
                name={tag.name}
                key={index}
                hashColor={tag.color}
                type="remove"
                removeItem={() => {
                  setTags(tags.filter((_, currentIndex) => currentIndex !== index));
                }}
              />
            ))}
          </div>
        )}
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default CreateForm;
