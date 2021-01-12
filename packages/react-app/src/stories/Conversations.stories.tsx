import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ConversationItem, ConversationItemProps } from "./Conversations";
import { conversations } from "./mock/Sidebar";

export default {
  title: "UIElements/ConversationItem",
  component: ConversationItem,
} as Meta;

const Template: Story<ConversationItemProps> = (args) => <ConversationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  conversation: conversations[0] as any,
  isActive: false,
};
