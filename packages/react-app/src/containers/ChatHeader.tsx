import React, { useContext } from "react";
import { Conversation, purePhoneNumber } from "@shared/helpers";
import { RootContext } from "contexts/RootContext";
import { Avatar } from "stories/Avatar";
import { Dropdown, DropdownItem } from "stories/Dropdown";
import { SearchIcon } from "svg/SearchIcon";
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

export const ChatHeader = () => {
  const t = useTranslate("chatHeader");
  const { conversation, user } = useContext(RootContext);
  const { name, participants, lastMessage } = conversation as Conversation;
  const sender: any =
    user?.phone &&
    participants.length === 2 &&
    participants.find(({ phone }: any) => purePhoneNumber(phone) !== purePhoneNumber(user.phone));
  const identifier = name || sender?.alias || sender?.phone;
  // handler
  const onItemClickHandler = (item: string) => () => console.log({ item });

  return (
    <header className="_1UuMR">
      <div className="_1vGIp" role="button">
        <Avatar defaultUser={true} size={40} imgSrc={user?.img} />
      </div>
      <div className="_2aNms" role="button">
        <div className="_2fKRJ">
          <div className="YEe1t">
            <span dir="auto" title={identifier} className="_1hI5g _1XH7x _1VzZY">
              {identifier}
            </span>
          </div>
        </div>
        <div className="_2Gdma _2amHe">
          <span title={`${lastMessage?.timestamp}`} className="_3Id9P _1VzZY">
            {lastMessage?.timestamp}
          </span>
        </div>
      </div>
      <div className="VPvMz">
        <div className="chGSa LhZF7">
          <div className="_2wfYK">
            <div aria-disabled="false" role="button" tabIndex={0} title="Recherche...">
              <SearchIcon primary={true} data-testid="search-alt" data-icon="search-alt" />
            </div>
            <span />
          </div>
          <Dropdown title={t("menu")}>
            {DROPDOWN_ITEMS?.map((item) => (
              <DropdownItem key={item} label={t(item)} onClick={onItemClickHandler(item)} />
            ))}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
