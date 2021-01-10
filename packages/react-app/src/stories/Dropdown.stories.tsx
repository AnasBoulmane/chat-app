import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Dropdown, DropdownItem, DropdownProps } from "./Dropdown";
import { useTranslate } from "hooks/useTranslate";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as Meta;

const items = [
  "menuNewGroup",
  "menuCreateRoom",
  "menuProfil",
  "menuArchived",
  "menuStarred",
  "menuSettings",
  "menuLogout",
];

const Template: Story<DropdownProps> = (args) => {
  const t = useTranslate("defaultSidebar");
  const onItemClickHandler = (item: string) => console.log({ item });
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Dropdown {...args}>
        {items?.map((item) => (
          <DropdownItem key={item} label={t(item)} onClick={onItemClickHandler(item)} />
        ))}
      </Dropdown>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "menu",
};
