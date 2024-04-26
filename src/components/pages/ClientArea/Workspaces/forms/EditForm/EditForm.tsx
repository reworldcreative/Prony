import React, { FC, useContext } from "react";
import "./EditForm.scss";
import { FieldValues, useForm } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { WorkspaceItemData } from "../../WorkspaceItem/WorkspaceItem";
import Input from "@/components/UI/forms/Input/Input";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

interface formProps {
  submitSuccess: (data: WorkspaceItemData) => void;
  formTitle: string;
  formData: WorkspaceItemData;
}

const EditForm: FC<formProps> = ({ submitSuccess, formTitle, formData }) => {
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

  const onSubmit = (data: WorkspaceItemData) => {
    submitSuccess({ ...data, id: formData.id });
    setOpenPopUp(false);
    reset();
  };

  const onCancel = () => {
    setOpenPopUp(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-edit-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="workspaces-form__wrapper">
        <div className="workspaces-form__block workspaces-edit-form__block">
          <Input
            label="New Name"
            name="name"
            register={register}
            messageType={errors.name ? "error" : ""}
            value={formData ? formData.name : ""}
            required={false}
            placeholder="Name of workspace"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.name?.message.toString() || "error!"}
          />

          <Input
            label="Subdomain"
            name="domain"
            register={register}
            messageType={errors.domain ? "error" : ""}
            value={formData ? formData.domain : ""}
            required={false}
            placeholder="Subdomain"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.domain?.message.toString() || "error!"}
          />
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default EditForm;
