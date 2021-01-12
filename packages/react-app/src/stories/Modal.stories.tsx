import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal } from "./Modal";
import { Button } from "./Button";

export default {
  title: "UIElements/Modal",
  component: Modal,
} as Meta;

const Template: Story<any> = (args) => <Modal {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  children: [
    <div className="_2fuxX">
      WhatsApp clone is open on another computer or browser. Click "Use here" to use WhatsApp in this window.
    </div>,

    <div className="_2SGGH">
      <Button text="Sign out" />
      <Button text="Use here" primary={true} />
    </div>,
  ],
};
