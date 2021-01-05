import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, primary, className, ...props }) => {
  return (
    <button tabIndex={0} {...props} className={`_30EVj ${primary ? "gMRg5" : "IqPek"} ${className || ""}`}>
      <div className="_2jX3t _2rbZG dWI29 _1GbxC">
        <div className="_2xUEC _2XHG4">{text}</div>
      </div>
    </button>
  );
};
