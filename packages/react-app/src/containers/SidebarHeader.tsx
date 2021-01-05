import React, { useContext } from "react";
import { RootContext } from "contexts/RootContext";
import { Dropdown } from "stories/Dropdown";

import { Avatar } from "stories/Avatar";
import { ChatIcon } from "svgs/ChatIcon";
import { StatusIcon } from "svgs/StatusIcon";

export const SidebarHeader = () => {
  const { user } = useContext(RootContext);

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
            <Dropdown
              title="menu"
              items={[
                "menuNewGroup",
                "menuCreateRoom",
                "menuProfil",
                "menuArchived",
                "menuStarred",
                "menuSettings",
                "menuLogout",
              ]}
              onItemClick={(item: string) => console.log({ item })}
            />
          </span>
        </div>
      </div>
    </header>
  );
};
