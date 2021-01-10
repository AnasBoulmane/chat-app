import React, { useContext } from "react";
import { RootContext } from "contexts/RootContext";
import { Dropdown, DropdownItem } from "stories/Dropdown";

import { Avatar } from "stories/Avatar";
import { ChatIcon } from "svgs/ChatIcon";
import { StatusIcon } from "svgs/StatusIcon";
import { useTranslate } from "hooks/useTranslate";

const DROPDOWN_ITEMS = [
  "menuNewGroup",
  "menuCreateRoom",
  "menuProfil",
  "menuArchived",
  "menuStarred",
  "menuSettings",
  "menuLogout",
];

export const SidebarHeader = () => {
  const t = useTranslate("defaultSidebar");
  const { user } = useContext(RootContext);
  // handlers
  const onItemClickHandler = (item: string) => () => console.log({ item });
  return (
    <header className="_2O84H">
      <div className="_3LtPa">
        <Avatar defaultUser={true} size={40} imgSrc={user?.img} />
      </div>
      <div className="_1eNef">
        <div className="chGSa LhZF7">
          <span>
            <div className="_2wfYK">
              <div aria-disabled="false" role="button" tabIndex={0} title="Statut">
                <StatusIcon data-testid="status-v3" data-icon="status-v3" />
              </div>
              <span />
            </div>
            <div className="_2wfYK">
              <div aria-disabled="false" role="button" tabIndex={0} title="Nouvelle discussion">
                <ChatIcon data-testid="chat" data-icon="chat" className="" />
              </div>
              <span />
            </div>
            <Dropdown title={t("menu")}>
              {DROPDOWN_ITEMS?.map((item) => (
                <DropdownItem key={item} label={t(item)} onClick={onItemClickHandler(item)} />
              ))}
            </Dropdown>
          </span>
        </div>
      </div>
    </header>
  );
};
