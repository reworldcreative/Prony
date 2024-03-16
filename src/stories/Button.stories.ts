import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/UI/buttons/Button/Button";

const meta: Meta<typeof Button> = {
  title: "App/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const DefaultButton: StoryObj<typeof Button> = {
  args: {
    type: "default",
    children: "Button",
  },
};

export const PrimaryButton: StoryObj<typeof Button> = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const DangerButton: StoryObj<typeof Button> = {
  args: {
    type: "danger",
    children: "Button",
  },
};
