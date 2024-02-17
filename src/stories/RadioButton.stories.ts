import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "App/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

export const DefaultRadioButton: StoryObj<typeof RadioButton> = {
  args: {
    type: "default",
    size: "medium",
    labelText: "RadioButton",
    value: "RadioButton",
  },
};

export const BigRadioButton: StoryObj<typeof RadioButton> = {
  args: {
    size: "big",
  },
};

export const SecondaryRadioButton: StoryObj<typeof RadioButton> = {
  args: {
    type: "secondary",
  },
};

export const DisabledRadioButton: StoryObj<typeof RadioButton> = {
  args: {
    type: "disabled",
  },
};
