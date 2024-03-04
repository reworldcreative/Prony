import { Meta, StoryObj } from "@storybook/react";
import Switch from "@/components/UI/forms/Switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "App/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

export const DefaultSwitch: StoryObj<typeof Switch> = {
  args: {
    type: "default",
    size: "medium",
    labelText: "Switch",
    value: "Switch",
  },
};

export const BigSwitch: StoryObj<typeof Switch> = {
  args: {
    size: "big",
  },
};

export const SecondarySwitch: StoryObj<typeof Switch> = {
  args: {
    type: "secondary",
  },
};

export const DisabledSwitch: StoryObj<typeof Switch> = {
  args: {
    type: "disabled",
  },
};
