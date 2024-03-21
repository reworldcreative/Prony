import React, { FC, useContext, useEffect } from "react";
import "./DeleteForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import Input from "@/components/UI/forms/Input/Input";
import Button from "@/components/UI/buttons/Button/Button";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

interface formProps {
  submitSuccess: (name: string) => void;
  formTitle: string;
}
const DeleteForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  const onSubmit = (name: FieldValues) => {
    submitSuccess(name.boardName);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="deleteForm">
      <h2 className="deleteForm__title title">{formTitle}</h2>

      <p className="deleteForm__text subtitle">
        This action will permanently delete the board and its content and cannot be undone. Please enter the board name
        to confirm.
      </p>

      <Input
        label="Board name"
        name="boardName"
        register={register}
        messageType={errors.boardName ? "error" : ""}
        settings={{
          required: "Board name should be unique",
          minLength: { value: 3, message: "Minimum length should be 3" },
          maxLength: { value: 50, message: "Maximum length should be 30" },
        }}
        messageText={errors?.boardName?.message.toString() || "error!"}
      />

      <FormButtons isValid={isValid} onCancel={onCancel} type="danger" />
    </form>
  );
};

export default DeleteForm;
