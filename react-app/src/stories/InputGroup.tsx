import React from "react";
import { FormGroup, Input } from "./InputGroup.style";

export interface InputGroupProps {
  type?: string;
  label?: string;
  checkmark?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onBlur?: (event: any) => void;
  onChange?: (event: any) => void;
}

export const InputGroup = ({
  type,
  label,
  placeholder,
  defaultValue,
  onChange,
  onBlur,
  checkmark,
}: InputGroupProps) => {
  return (
    <FormGroup className="_32vnm _2k4Ax _2zqsv">
      {label && (
        <div className="fWatW">
          <div className="pA7HB _2jV60">
            <span className="_1fPA0 _27rts">{label}</span>
          </div>
        </div>
      )}
      <div tabIndex={-1} className="_32Tkw  _3OSUF _3C2GM">
        <div className="_2_g1_">
          <div tabIndex={-1} className="_2HE1Z ugx-m">
            <Input
              className="_1awRl copyable-text selectable-text"
              defaultValue={defaultValue}
              placeholder={placeholder}
              contentEditable="true"
              type={type}
              onChange={onChange}
              spellCheck="false"
              onBlur={onBlur}
              dir="ltr"
            />
          </div>
          <span className="_2vrrM" />
          {checkmark && (
            <span className="_1b5K6">
              <div
                className="_9uumR"
                title="Cliquez pour sauvegarder, Échap pour annuler"
                style={{ transform: "scaleX(1) scaleY(1)", opacity: 1 }}
              >
                <span data-testid="checkmark" data-icon="checkmark" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z" />
                  </svg>
                </span>
              </div>
            </span>
          )}
        </div>
        <div className="_2Wm79" />
        <div />
      </div>
    </FormGroup>
  );
};
