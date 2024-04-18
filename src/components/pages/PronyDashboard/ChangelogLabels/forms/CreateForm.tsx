import React, { FC, useContext, useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import { ChangelogLabelsItemData } from "../ChangelogLabelsItem/ChangelogLabelsItem";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Input from "@/components/UI/forms/Input/Input";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import ColorsContainer from "../../Tags/form/ColorsContainer/ColorsContainer";

interface formProps {
  submitSuccess: (data: ChangelogLabelsItemData) => void;
  formTitle: string;
  formData: ChangelogLabelsItemData;
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formType, formData }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

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
    setValue("name", formData.name);
    setValue("color", formData.color);
  }, [formData]);

  const onSubmit = (data: ChangelogLabelsItemData) => {
    submitSuccess(data);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form changelogLabelsForm">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="changelogLabelsForm__wrapper">
        <Input
          label="Name"
          name="name"
          register={register}
          messageType={errors.name ? "error" : ""}
          value={formData ? formData.name : ""}
          required={false}
          placeholder="Enter status name"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 50, message: "Maximum length should be 30" },
          }}
          messageText={errors?.name?.message.toString() || "error!"}
        />

        <Controller
          name="color"
          control={control}
          defaultValue={formData.color}
          render={({ field, field: { onChange } }) => (
            <ColorsContainer getValue={onChange} field={field} defaultColor={formData.color} type="changelog" />
          )}
        />
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default CreateForm;
