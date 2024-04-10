import React, { FC, useContext, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import { SegmentsItemData } from "../../SegmentsItem/SegmentsItem";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Input from "@/components/UI/forms/Input/Input";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

interface formProps {
  submitSuccess: (data: SegmentsItemData) => void;
  formTitle: string;
  formData: SegmentsItemData;
  segmentsData?: SegmentsItemData[];
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formData, segmentsData, formType }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [segmentName, setSegmentName] = useState<string>(formData.name);
  const [segmentRepresentation, setSegmentRepresentation] = useState<string>(formData.representation);
  const parts = segmentRepresentation.split(" ");
  const [segmentCompany, setSegmentCompany] = useState<string>(parts[0]);
  const [segmentDivider, setSegmentDivider] = useState<string>(parts[1]);
  const [segmentValue, setSegmentValue] = useState<string>(parts[2]);
  const [segmentAttribute, setSegmentAttribute] = useState<string>("");

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
      id: formData.id,
      name: data.segmentName,
      representation: `${data.SegmentCompany} ${data.SegmentDivider} ${data.segmentValue}`,
    });

    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  useEffect(() => {
    setSegmentName(formData.name);
    setSegmentRepresentation(formData.representation);
    setSegmentCompany(formData.representation.split(" ")[0]);
    setSegmentDivider(formData.representation.split(" ")[1]);
    setSegmentValue(formData.representation.split(" ")[2]);

    setValue("segmentName", formData.name);
    setValue("SegmentCompany", formData.representation.split(" ")[0]);
    setValue("SegmentDivider", formData.representation.split(" ")[1]);
    setValue("segmentValue", formData.representation.split(" ")[2]);
    setValue("SegmentAttribute", "");
  }, [formData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form segments-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="segments-form__wrapper">
        <Input
          label="Name"
          name="segmentName"
          placeholder="Enter user segment name"
          register={register}
          messageType={errors.segmentName ? "error" : ""}
          value={segmentName}
          settings={{
            required: "invalid segment name",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 20, message: "Maximum length should be 20" },
          }}
          messageText={errors?.segmentName?.message.toString() || "error!"}
        />

        <div className="segments-form__row">
          <Controller
            control={control}
            name="SegmentCompany"
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => (
              <Dropdown
                current={segmentCompany}
                addClass="segments-form__dropdown"
                type="bordered"
                onSelect={onChange}
                options={["Company", "User", "created"]}
              />
            )}
          />

          <Controller
            control={control}
            name="SegmentDivider"
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => (
              <Dropdown
                current={segmentDivider}
                addClass="segments-form__dropdown"
                type="bordered"
                onSelect={onChange}
                options={["is", "after"]}
              />
            )}
          />

          <Input
            name="segmentValue"
            placeholder="value"
            register={register}
            messageType={errors.segmentValue ? "error" : ""}
            value={segmentValue}
            settings={{
              required: "invalid segment name",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 15, message: "Maximum length should be 15" },
            }}
            messageText={errors?.segmentValue?.message.toString() || "error!"}
          />
        </div>

        <Controller
          control={control}
          name="SegmentAttribute"
          render={({ field: { onChange } }) => (
            <Dropdown
              current="Select attribute"
              addClass="segments-form__dropdown segments-form__attribute"
              type="bordered"
              onSelect={onChange}
              options={["attribute 1", "attribute 2"]}
            />
          )}
        />

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default CreateForm;
