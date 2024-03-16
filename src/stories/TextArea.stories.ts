import { Meta, StoryObj } from "@storybook/react";
import TextArea from "@/components/UI/forms/TextArea/TextArea";

const meta: Meta<typeof TextArea> = {
  title: "App/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

export const DefaultTextArea: StoryObj<typeof TextArea> = {
  args: {
    name: "textArea",
    messageType: "",
  },
};

export const TextAreaWithLabel: StoryObj<typeof TextArea> = {
  args: {
    label: "Label",
    name: "textArea",
    messageType: "",
  },
};

export const TextAreaError: StoryObj<typeof TextArea> = {
  args: {
    label: "Error",
    name: "textArea",
    messageType: "error",
    messageText: "this value is not valid",
  },
};

export const TextAreaSuccess: StoryObj<typeof TextArea> = {
  args: {
    label: "Error",
    name: "textArea",
    messageType: "success",
    messageText: "success text area value",
  },
};
