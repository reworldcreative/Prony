import { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/UI/forms/Input/Input";

const meta: Meta<typeof Input> = {
  title: "App/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const DefaultInput: StoryObj<typeof Input> = {
  args: {
    name: "input",
    messageType: "",
  },
};

export const InputWithLabel: StoryObj<typeof Input> = {
  args: {
    label: "Label",
    name: "input",
    messageType: "",
  },
};

export const InputError: StoryObj<typeof Input> = {
  args: {
    label: "Error",
    name: "input",
    messageType: "error",
    messageText: "this value is not valid",
  },
};

export const InputSuccess: StoryObj<typeof Input> = {
  args: {
    label: "Error",
    name: "input",
    messageType: "success",
    messageText: "success input value",
  },
};
