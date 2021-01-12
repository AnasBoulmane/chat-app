import React from "react";
import { useTranslate } from "hooks/useTranslate";
import { Dropdown, DropdownItem, DropdownToggle } from "stories/Dropdown";

import { ChatContainer } from "./ChatContainer";
import { Sidebar } from "./Sidebar";

const DROPDOWN_ITEMS = [
  "menuNewGroup",
  "menuCreateRoom",
  "menuProfil",
  "menuArchived",
  "menuStarred",
  "menuSettings",
  "menuLogout",
];

export const All = () => {
  const t = useTranslate("defaultSidebar");

  // handlers
  const onItemClickHandler = (item: string) => () => console.log({ item });
  return (
    <>
      <div style={{ position: "fixed", zIndex: 999999999 }}>
        <span />
        <span />
        <span />
        <span />
        <span>
          <Dropdown title={t("menu")} init={"open"}>
            <DropdownToggle />
            {DROPDOWN_ITEMS?.map((item) => (
              <DropdownItem key={item} label={t(item)} onClick={onItemClickHandler(item)} />
            ))}
          </Dropdown>
        </span>
      </div>
      <div className="_3y4A-" />
      <div className="_3Bog7">
        <div className="i5ly3 _2NwAr">
          <span className="WnX2e" />
        </div>
        <div className="i5ly3 _2l_Ww">
          <span className="WnX2e" />
        </div>
        <div className="i5ly3 _299go">
          <span className="WnX2e" />
        </div>
      </div>
      <div className="i5ly3 _2NwAr">
        <Sidebar />
      </div>
      <div className="i5ly3 _2l_Ww">
        <ChatContainer />
      </div>
    </>
  );
};
