import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { InputGroup, InputGroupProps } from "./InputGroup";

export default {
  title: "UIElements/InputGroup",
  component: InputGroup,
} as Meta;

const Template: Story<InputGroupProps> = (args) => (
  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <InputGroup {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Default",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "With placeholder",
  placeholder: "placeholder",
};

export const Password = Template.bind({});
Password.args = {
  label: "Your password",
  type: "password",
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  label: "Date",
  type: "date",
};
