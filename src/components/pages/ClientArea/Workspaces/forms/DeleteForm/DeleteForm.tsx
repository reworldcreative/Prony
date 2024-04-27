import React, { FC, useContext, useEffect } from "react";
import "./DeleteForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import Input from "@/components/UI/forms/Input/Input";

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

  const onSubmit = (data: FieldValues) => {
    submitSuccess(data.name);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-delete-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <p className="workspaces-delete-form__info subtitle">
        Are you sure? This action cannot be undone. Enter the name of this workspace below to confirm.
      </p>

      <Input
        label="Workspace name"
        name="name"
        register={register}
        messageType={errors.name ? "error" : ""}
        placeholder="Name of workspace"
        settings={{
          required: "Board name should be unique",
          minLength: { value: 3, message: "Minimum length should be 3" },
          maxLength: { value: 50, message: "Maximum length should be 30" },
        }}
        messageText={errors?.name?.message.toString() || "error!"}
      />

      <FormButtons isValid={isValid} onCancel={onCancel} type="danger" />
    </form>
  );
};

export default DeleteForm;
