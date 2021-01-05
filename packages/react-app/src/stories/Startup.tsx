import React from "react";

export interface StartupProps {
  progress: number;
}

export const Startup: React.FC<StartupProps> = ({ progress }) => {
  return (
    <div id="startup">
      <svg className="aLK5N" width={50} height={50} viewBox="0 0 44 44">
        <circle className="_2w4ui _1LcWJ" cx={22} cy={22} r={20} fill="none" strokeWidth={4} />
      </svg>
      <div className="_2XERB">
        <progress value={progress} max={100} dir="ltr" className="vVeoP" />
      </div>
    </div>
  );
};
