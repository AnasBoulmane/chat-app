import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Startup, StartupProps } from "./Startup";

export default {
  title: "Example/Startup",
  component: Startup,
} as Meta;

const Template: Story<StartupProps> = (args) => <Startup {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 66,
};
