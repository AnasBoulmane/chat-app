import React, { useRef, useState } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { useTranslate } from "hooks/useTranslate";
import { useToggle } from "hooks/useToggle";
import { MenuIcon } from "svgs/MenuIcon";

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  items: string[];
  i18nSection?: string;
  onItemClick?: (item: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, items, i18nSection, onItemClick, className, ...props }) => {
  const t = useTranslate(i18nSection || "defaultSidebar");
  const ref = useRef<any>();
  const [isOpen, toggleOpen] = useToggle(false);
  useOnClickOutside([ref], () => toggleOpen(false));
  // handlers
  const onToggleHandler = () => toggleOpen();
  const onItemClickHandler = (item: string) => onItemClick && (() => onItemClick(item));
  return (
    <div {...props} className={`_2wfYK ${isOpen ? "lpKIg" : undefined} ${className || ""}`} ref={ref}>
      <div aria-disabled="false" role="button" tabIndex={0} title={t(title)} onClick={onToggleHandler}>
        <MenuIcon data-testid="menu" data-icon="menu" />
      </div>
      <span>
        {isOpen && (
          <div
            tabIndex={-1}
            className="_3nLE_ _3aUCy"
            style={{ transformOrigin: "right top", transform: "scale(1)", opacity: 1 }}
          >
            <ul className="_1hhxx">
              {items?.map((item) => (
                <DropdownItem key={item} item={t(item)} onItemClick={onItemClickHandler(item)} />
              ))}
            </ul>
          </div>
        )}
      </span>
    </div>
  );
};

export const DropdownItem: React.FC<{ item: string; onItemClick: any }> = ({ item, onItemClick }) => {
  const [isHover, toggleHover] = useState(false);
  // handlers
  const onToggleHandler = (value: boolean) => () => toggleHover(value);
  return (
    <li
      tabIndex={-1}
      className={`_1uAPO _2AkAt ${isHover && "_2S4cq"} _14FXT`}
      data-animate-dropdown-item="true"
      style={{ opacity: 1 }}
    >
      <div
        className="_1OwwW _3oTCZ"
        role="button"
        title={item}
        onMouseEnter={onToggleHandler(true)}
        onMouseLeave={onToggleHandler(false)}
        onClick={onItemClick}
      >
        {item}
      </div>
    </li>
  );
};
