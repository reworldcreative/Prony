import React, { FC, useContext } from "react";
import "./ReplaceForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormDropdown from "../../../Posts/forms/CreateForm/FormDropdown";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";

interface formProps {
  submitSuccess: (currentId: number, replacedItem: string) => void;
  currentTag: string;
  currentId: number;
  formTitle: string;
  tags: string[];
}

const ReplaceForm: FC<formProps> = ({ submitSuccess, formTitle, currentTag, currentId, tags }) => {
  const { setOpenPopUp } = useContext(GlobalContext);

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
    submitSuccess(currentId, data.replacedItem);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form tags-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="replace-form__wrapper">
        <p className="text replace-form__text">Replaces {currentTag} tag with another tag</p>

        <Controller
          control={control}
          name="replacedItem"
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Dropdown type="bordered" current={currentTag} options={tags} onSelect={onChange} />
          )}
        />

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default ReplaceForm;
