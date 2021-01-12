import React, { useContext } from "react";
import { Conversation } from "@shared/helpers";
import { RootContext } from "contexts/RootContext";
import { useTranslate } from "hooks/useTranslate";

import { ConversationWrapper, ConversationItem, ConversationsList } from "stories/Conversations";
import { SearchGroup, useSearchGroup } from "stories/SearchGroup";

import { SidebarHeader } from "./SidebarHeader";

export const Sidebar = () => {
  const t = useTranslate("defaultSidebar");
  const { conversations, conversation, setConversation } = useContext(RootContext);
  const { isLoading, onSearchHandler } = useSearchGroup(async (value: string) => {
    console.log({ searchValue: value });
  });
  // debug
  console.log("on render", { conversation });
  // handlers
  const onConversationItemClick = (item: Conversation) => () => setConversation(item);

  return (
    <div id="side" className="_2ruyW">
      <SidebarHeader />
      <span className="_2rAWW" />
      <SearchGroup placeholder={t("contactSearchPlaceholder")} isLoading={isLoading} onChange={onSearchHandler} />
      <div className="_3Xjbn _3jNGW" id="pane-side">
        <div tabIndex={-1} data-tab="4">
          <div className="">
            <ConversationsList
              length={conversations.length}
              aria-label={t("ConversationsListLabel")}
              className="_3soxC _2aY82"
              role="region"
            >
              {conversations.map((item, position) => (
                <ConversationWrapper key={position} position={position} className="_1MZWu">
                  <ConversationItem
                    conversation={item}
                    isActive={item._id === conversation?._id}
                    onClick={onConversationItemClick(item)}
                  />
                </ConversationWrapper>
              ))}
            </ConversationsList>
          </div>
        </div>
        <div className="_2g_Pt" />
      </div>
    </div>
  );
};
