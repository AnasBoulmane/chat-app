import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "UIElements/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Avatar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 49,
};
