import React, { useRef } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { useToggle } from "hooks/useToggle";
import { MenuIcon } from "svgs/MenuIcon";

import { ItemContainer } from "./Dropdown.style";

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  init?: "open" | "close";
}

export const Dropdown: React.FC<DropdownProps> = ({ title, init, className, ...props }) => {
  const ref = useRef<any>();
  const [isOpen, toggleOpen] = useToggle(init?.toLocaleLowerCase() === "open");
  //
  const children = React.Children.toArray(props.children);
  // filter dropdown children
  const dropdownToggle = children.find((child: any) => child.type === DropdownToggle);
  const dropdownItems = children.filter((child: any) => child.type === DropdownItem);
  // handlers
  useOnClickOutside([ref], () => toggleOpen(false));
  const onToggleHandler = () => toggleOpen();
  return (
    <div {...props} className={`_2wfYK ${isOpen ? "lpKIg" : ""} ${className || ""}`} ref={ref}>
      <div aria-disabled="false" role="button" tabIndex={0} title={title} onClick={onToggleHandler}>
        {dropdownToggle || <MenuIcon data-testid="menu" data-icon="menu" />}
      </div>
      <span>{isOpen && <DropdownMenu>{dropdownItems}</DropdownMenu>}</span>
    </div>
  );
};

/**
 * DropdownToggle component: permit to specify the toggle component, default <MenuIcon/>
 * @param props.children - string: item label
 */
export const DropdownToggle: React.FC = ({ children }) => <>{children}</>;

/**
 * DropdownMenu component: render list of DropdownItem of the Dropdown list
 * @param props.children - Array<DropdownItem>: item
 */
const DropdownMenu: React.FC = ({ children }) => (
  <div tabIndex={-1} className="_3nLE_ _3aUCy">
    <ul className="_1hhxx">{children}</ul>
  </div>
);

/**
 * Dropdown.Item component: render one item of the Dropdown list
 * @param props.label - string: item label
 * @param props.onClick - Function: onClick event handler
 */
export const DropdownItem: React.FC<{ label: string; onClick: any }> = ({ label, onClick }) => (
  <ItemContainer tabIndex={-1} className={`_1uAPO _2AkAt _14FXT`} data-animate-dropdown-item="true">
    <div title={label} onClick={onClick} className="_1OwwW _3oTCZ" role="button">
      {label}
    </div>
  </ItemContainer>
);
