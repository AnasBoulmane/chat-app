import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SearchGroup, SearchGroupProps } from "./SearchGroup";

export default {
  title: "UIElements/SearchGroup",
  component: SearchGroup,
} as Meta;

const Template: Story<SearchGroupProps> = (args) => (
  <div
    style={{
      display: "flex",
      alignSelf: "center",
      flexDirection: "column",
      width: "300px",
    }}
  >
    <SearchGroup {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Rechercher ou démarrer une nouvelle discussion",
};
