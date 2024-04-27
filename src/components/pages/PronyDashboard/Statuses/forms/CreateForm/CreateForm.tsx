import React, { FC, useContext, useEffect, useState } from "react";
import "./CreateForm.scss";
import { StatusesItemData } from "../../StatusesItem/StatusesItem";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import Input from "@/components/UI/forms/Input/Input";
import Checkbox from "@/components/UI/forms/Checkbox/Checkbox";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import ColorsContainer from "../../../Tags/form/ColorsContainer/ColorsContainer";

interface formProps {
  submitSuccess: (data: StatusesItemData) => void;
  formTitle: string;
  formData: StatusesItemData;
  segmentsData?: StatusesItemData[];
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formData, segmentsData, formType }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [statusName, setStatusName] = useState<string>(formData.name);
  const [statusVotable, setStatusVotable] = useState<boolean>(formData.votable);
  const [showOnRoadmap, setShowOnRoadmap] = useState<boolean>(formData.showOnRoadmap);
  const [statusPrivate, setStatusPrivate] = useState<boolean>(formData.privacy);
  const [statusColor, setStatusColor] = useState<string>(formData.color);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    submitSuccess({
      name: data.name,
      privacy: data.privacy === "private" ? true : false,
      color: data.color,
      id: formData.id,
      votable: data.votable,
      showOnRoadmap: data.showOnRoadmap,
    });
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  useEffect(() => {
    setStatusName(formData.name);
    setStatusColor(formData.color);
    setStatusVotable(formData.votable);
    setShowOnRoadmap(formData.showOnRoadmap);
    setStatusPrivate(formData.privacy);

    setValue("name", formData.name);
    setValue("votable", formData.votable);
    setValue("showOnRoadmap", formData.showOnRoadmap);
    setValue("privacy", formData.privacy ? "private" : "public");
    setValue("color", formData.color);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form statuses-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="statuses-form__wrapper">
        <Input
          label="Name"
          name="name"
          placeholder="Enter user status name"
          register={register}
          messageType={errors.name ? "error" : ""}
          value={statusName}
          settings={{
            required: "invalid status name",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 20, message: "Maximum length should be 20" },
          }}
          messageText={errors?.name?.message.toString() || "error!"}
        />

        <div className="statuses-form__block">
          <div className="checkbox-wrapper">
            <Controller
              name="votable"
              control={control}
              defaultValue={statusVotable}
              render={({ field }) => (
                <Checkbox
                  labelText="Votable"
                  name="Votable"
                  value="Votable"
                  type="secondary"
                  size="big"
                  field={field}
                  checked={field.value}
                />
              )}
            />
            <p className="caption radio-text">Defines if posts in this status can get votes</p>
          </div>

          <div className="checkbox-wrapper">
            <Controller
              name="showOnRoadmap"
              control={control}
              defaultValue={showOnRoadmap}
              render={({ field }) => (
                <Checkbox
                  labelText="Show on roadmap"
                  name="showOnRoadmap"
                  value="showOnRoadmap"
                  type="secondary"
                  size="big"
                  field={field}
                  checked={field.value}
                />
              )}
            />
            <p className="caption  radio-text">Defines if posts in this status should be added to the roadmap</p>
          </div>
        </div>

        <fieldset className="form__fieldset statuses-form__fieldset">
          <legend className="text form__legend">Privacy</legend>
          <div className="statuses-form__block">
            <div className="radio-wrapper">
              <Controller
                name="privacy"
                control={control}
                defaultValue="public"
                render={({ field }) => (
                  <RadioButton
                    group="privacy"
                    labelText="Public"
                    value="public"
                    selectedValue={field.value}
                    size="big"
                    type="secondary"
                    field={field}
                    defaultChecked={formData && formData.privacy}
                  />
                )}
              />
            </div>

            <div className="radio-wrapper">
              <Controller
                name="privacy"
                control={control}
                defaultValue="public"
                render={({ field }) => (
                  <RadioButton
                    group="privacy"
                    labelText="Private"
                    value="private"
                    selectedValue={field.value}
                    size="big"
                    type="secondary"
                    field={field}
                    defaultChecked={formData && formData.privacy}
                  />
                )}
              />
            </div>
          </div>

          <p className="caption">Privacy flag that defines post visibility and tag visibility at the board</p>
        </fieldset>

        <Controller
          name="color"
          control={control}
          defaultValue={statusColor}
          render={({ field }) => <ColorsContainer getValue={setStatusColor} field={field} defaultColor={statusColor} />}
        />

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default CreateForm;
