import { Meta, StoryObj } from "@storybook/react";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";

const meta: Meta<typeof DropdownSelect> = {
  title: "App/DropdownSelect",
  component: DropdownSelect,
  tags: ["autodocs"],
};

export default meta;

export const DropdownSelectRadio: StoryObj<typeof DropdownSelect> = {
  args: {
    selectType: "radio",
    title: "drop-down radio",
    defaultValue: ["option1"],
    options: [
      { name: "option1", labelText: "Option 1" },
      { name: "option2", labelText: "Option 2" },
      { name: "option3", labelText: "Option 3" },
    ],
  },
};

export const DropdownSelectCheckbox: StoryObj<typeof DropdownSelect> = {
  args: {
    selectType: "checkbox",
    title: "drop-down checkbox",
    defaultValue: ["option1"],
    options: [
      { name: "option1", labelText: "Option 1" },
      { name: "option2", labelText: "Option 2" },
      { name: "option3", labelText: "Option 3" },
    ],
  },
};
