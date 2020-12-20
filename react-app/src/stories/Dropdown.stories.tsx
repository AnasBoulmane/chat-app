import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Dropdown {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Button",
};
