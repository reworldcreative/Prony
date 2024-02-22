import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "App/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

export const DefaultDropdown: StoryObj<typeof Dropdown> = {
  args: {
    options: ["option1", "option2"],
    current: "option1",
  },
};
