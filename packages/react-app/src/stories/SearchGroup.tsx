import React, { useState, ChangeEvent } from "react";
import { SearchIcon } from "svg/SearchIcon";
import { BackIcon } from "svg/BackIcon";
import { XIcon } from "svg/XIcon";

import { Input, Placeholder } from "./SearchGroup.style";

export interface SearchGroupProps extends React.HTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchGroup: React.FC<SearchGroupProps> = ({
  isLoading,
  defaultValue,
  placeholder,
  className,
  onChange,
  onBlur,
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  const [isActive, toggleActive] = useState(!!value.length);

  // handlers
  const onFocusHandler = () => toggleActive(true);
  const onBlurHandler = (event: any) => {
    toggleActive((prev) => !!value.length);
    onBlur?.(event);
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div className={`_1Ra05 ${className || ""}`} tabIndex={-1}>
      <div className={`_22PcK ${isActive && "_30SFc"}`}>
        <button className="_3Wrfs">
          {/* leading svg */}
          <div className="_14VsQ _2fIjT">
            <BackIcon data-testid="back" data-icon="back" />
          </div>
          {/* search input ready for */}
          <div className="_14VsQ _23HdX">
            <SearchIcon data-testid="search" data-icon="search" />
          </div>
        </button>

        {!!value.length && (
          <span>
            {/* leading svg */}
            {isLoading && (
              <div className="YDMZI">
                <svg className="aLK5N" width={20} height={20} viewBox="0 0 45 45">
                  <circle className="_2w4ui _3SASF" cx="22.5" cy="22.5" r={20} fill="none" strokeWidth={5} />
                </svg>
              </div>
            )}
            {/* close/reset button */}
            {!isLoading && (
              <button className="_3Eocp" style={{ transform: "scaleX(1) scaleY(1)", opacity: 1 }}>
                <XIcon data-testid="x-alt" data-icon="x-alt" className="" />
              </button>
            )}
          </span>
        )}

        <Placeholder className="_1MBn6">{placeholder}</Placeholder>
        <label className="_2Evw0">
          <div tabIndex={-1} className={`_2HE1Z _1aIlm ${isActive && "focused"}`}>
            <div className="Srlyw" style={{ visibility: !value.length ? "visible" : "hidden" }} />
            <Input
              className="_1awRl copyable-text selectable-text"
              defaultValue={defaultValue}
              contentEditable="true"
              spellCheck="false"
              onChange={onChangeHandler}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              dir="ltr"
              data-tab="3"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export function useSearchGroup (handler: (value: string) => Promise<any>) {
  const [isLoading, setLoading] = useState(true);

  const onSearchHandler = async ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    await handler(value);
    setTimeout(() => setLoading(false), 3000);
  };

  return {
    isLoading,
    onSearchHandler,
  };
}
