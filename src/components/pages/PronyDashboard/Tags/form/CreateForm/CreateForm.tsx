import React, { FC, useContext, useEffect, useState } from "react";
import "./CreateForm.scss";
import { TagsItemData } from "../../TagsItem/TagsItem";
import { Controller, FieldValues, useForm, useWatch } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import Input from "@/components/UI/forms/Input/Input";
import ColorsContainer from "../ColorsContainer/ColorsContainer";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";

interface formProps {
  submitSuccess: (data: FieldValues) => void;
  formTitle: string;
  formData: TagsItemData;
  tagsData?: TagsItemData[];
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formData, tagsData, formType }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [tagName, setTagName] = useState<string>(formData.title);
  const [tagColor, setTagColor] = useState<string>(formData.color);
  const [privacy, setPrivacy] = useState<string>(formData.status);

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

  useEffect(() => {
    // reset();
    setTagName(formData.title);
    setTagColor(formData.color);
    setPrivacy(formData.status);
    setValue("status", formData.status);
    setValue("TagName", formData.title);
    setValue("color", formData.color);
  }, [formData]);

  const onSubmit = (data: TagsItemData) => {
    submitSuccess({ ...data });
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  useEffect(() => {
    const subscription = watch((value) => setPrivacy(value.status));
    return () => subscription.unsubscribe();
  }, [watch("status")]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form tags-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="tags-form__wrapper">
        <Input
          label="Name"
          name="TagName"
          placeholder="Enter tagname"
          register={register}
          messageType={errors.TagName ? "error" : ""}
          value={tagName}
          settings={{
            required: "invalid tag name",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 15, message: "Maximum length should be 15" },
          }}
          messageText={errors?.TagName?.message.toString() || "error!"}
        />

        <div className="tags-form__colors">
          <Controller
            name="color"
            control={control}
            defaultValue={tagColor}
            render={({ field }) => <ColorsContainer getValue={setTagColor} field={field} defaultColor={tagColor} />}
          />
        </div>

        <div className="tags-form__privacy">
          <p className="tags-form__privacy-caption text">Privacy</p>

          <div className="tags-form__privacy-row">
            <Controller
              name="status"
              control={control}
              defaultValue={privacy}
              render={({ field }) => (
                <RadioButton
                  group="privacy"
                  labelText="Public"
                  value="public"
                  selectedValue={privacy}
                  size="big"
                  type="secondary"
                  field={field}
                  defaultChecked={privacy === "public"}
                />
              )}
            />

            <Controller
              name="status"
              control={control}
              defaultValue={privacy}
              render={({ field }) => (
                <RadioButton
                  group="privacy"
                  labelText="Private"
                  value="private"
                  selectedValue={privacy}
                  size="big"
                  type="secondary"
                  field={field}
                  defaultChecked={privacy === "private"}
                />
              )}
            />
          </div>

          <p className="tags-form__privacy-text text">Private tags are only visible to moderators.</p>
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default CreateForm;
