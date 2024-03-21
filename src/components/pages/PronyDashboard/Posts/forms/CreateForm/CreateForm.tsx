import React, { FC, useContext, useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Input from "@/components/UI/forms/Input/Input";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import { PostsItemProps } from "../../PostsItem/PostsItem";
import FileLoader from "@/components/UI/forms/FileLoader/FileLoader";
import FormDropdown from "./FormDropdown";

interface formProps {
  submitSuccess: (data: PostsItemProps) => void;
  formTitle: string;
  formData: PostsItemProps;
  postsData?: PostsItemProps[];
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formData, postsData, formType }) => {
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

  const onSubmit = (data: PostsItemProps) => {
    submitSuccess(data);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form postForm">
      <h2 className="form__title title">{formTitle}</h2>

      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <legend className="visibility-hidden">main information</legend>

          <Controller
            control={control}
            name="BoardName"
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <FormDropdown
                current=""
                name="Board name"
                required={true}
                onSelect={onChange}
                options={["Board name1", "Board name2"]}
              />
            )}
          />

          <Input
            label="Title"
            name="postTitle"
            register={register}
            messageType={errors.postTitle ? "error" : ""}
            value={formData ? formData.title : ""}
            required={true}
            placeholder="Enter post title"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.postTitle?.message.toString() || "error!"}
          />

          <TextArea
            label="Details"
            name="details"
            rows={4}
            register={register}
            messageType={errors.details ? "error" : ""}
            value={formData ? formData.text : ""}
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
            render={({ field: { onChange } }) => <FileLoader onSelect={onChange} />}
          />

          <Controller
            control={control}
            name="Owner"
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => (
              <FormDropdown
                current=""
                name="Owner"
                required={false}
                onSelect={onChange}
                options={["Owner1", "Owner2"]}
              />
            )}
          />

          <Controller
            control={control}
            name="Status"
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <FormDropdown
                current=""
                name="Status"
                required={true}
                onSelect={onChange}
                options={["first status", "second status"]}
              />
            )}
          />
        </fieldset>
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default CreateForm;
