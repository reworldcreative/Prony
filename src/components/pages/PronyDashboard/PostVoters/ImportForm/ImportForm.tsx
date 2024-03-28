import React, { FC, useContext } from "react";
import "./ImportForm.scss";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import FormDropdown from "../../Posts/forms/CreateForm/FormDropdown";
import FileLoader from "@/components/UI/forms/FileLoader/FileLoader";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

interface ImportFormProps {
  submitSuccess: (data: FieldValues) => void;
}

const ImportForm: FC<ImportFormProps> = ({ submitSuccess }) => {
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

  const onSubmit = (data: FieldValues) => {
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
      <h2 className="title form__title">Import post</h2>

      <div className="importForm__wrapper">
        <Controller
          control={control}
          name="SelectedBoardName"
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <FormDropdown
              current="1 board"
              name="Board selected"
              required={true}
              onSelect={onChange}
              options={["1 board", "2 board"]}
            />
          )}
        />

        <Controller
          control={control}
          name="File"
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => <FileLoader label="File" type="file" onSelect={onChange} />}
        />

        <FormButtons onSubmit={() => {}} isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default ImportForm;
