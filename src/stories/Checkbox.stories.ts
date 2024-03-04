import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/UI/forms/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "App/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

export const DefaultCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    type: "default",
    size: "medium",
    labelText: "Checkbox",
    value: "Checkbox",
  },
};

export const BigCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    size: "big",
  },
};

export const SecondaryCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    type: "secondary",
  },
};

export const DisabledCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    type: "disabled",
  },
};
