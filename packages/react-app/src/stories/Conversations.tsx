import React, { useContext } from "react";
import { Conversation, purePhoneNumber } from "@shared/helpers";
import { RootContext } from "contexts/RootContext";
import { useOnMouseHover } from "hooks/useOnMouseHover";
import { DoubleCheckIcon } from "svgs/DoubleCheckIcon";

import { Avatar } from "./Avatar";

export * from "./Conversations.style";

export interface ConversationItemProps extends React.HTMLAttributes<HTMLElement> {
  conversation: Conversation;
  isActive?: boolean;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation: { name, participants, lastMessage },
  isActive,
  ...props
}) => {
  const [isHover, onToggleHandler] = useOnMouseHover(false);
  const { user } = useContext(RootContext);
  const sender: any =
    user?.phone &&
    participants.length === 2 &&
    participants.find(({ phone }: any) => purePhoneNumber(phone) !== purePhoneNumber(user.phone));
  const identifier = name || sender?.alias || sender?.phone;
  return (
    <div {...props} tabIndex={-1} aria-selected="false" role="option">
      <div
        onMouseEnter={onToggleHandler(true)}
        onMouseLeave={onToggleHandler(false)}
        className={`_3Pwfx ${isHover ? "hover" : ""} ${isActive ? "_1GGbM" : ""}`}
      >
        <div className="_22mTQ">
          <Avatar defaultUser={false} size={49} imgSrc={user?.img} />
        </div>
        <div className="_1C6Zl">
          <div className="_1c_mC">
            <div className="_3Tw1q">
              <span className="_3es8f">
                <span dir="auto" title={identifier} className="_1hI5g _1XH7x _1VzZY">
                  {identifier}
                </span>
                <div className="_3cD3_" />
              </span>
            </div>
            <div className="_2gsiG">{lastMessage?.timestamp}</div>
          </div>
          <div className="_7W_3c">
            <div className="fqPQb">
              {lastMessage && (
                <span className="_3MjzD" title={lastMessage.message}>
                  {lastMessage.state === "received" && (
                    <div className="_3PHHe _-68As">
                      <DoubleCheckIcon data-testid="status-dblcheck" data-icon="status-dblcheck" />
                    </div>
                  )}

                  <span dir="auto" className="_1hI5g _1XH7x _1VzZY">
                    {lastMessage.message}
                  </span>
                </span>
              )}
            </div>
            <div className="_2gsiG">
              <span />
              <span />
              <span>
                {/* {isHover && (
                  <div className="tRtcW" style={{ width: 20, opacity: 1 }}>
                    <span data-testid="down" data-icon="down">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width={19} height={20}>
                        <path fill="currentColor" d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z" />
                      </svg>
                    </span>
                  </div>
                )} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
