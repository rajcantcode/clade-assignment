import { CSSProperties } from "react";

type NavButtonConfig = {
  focus: {
    textColor: string;
  };
  unfocus: {
    textColor: string;
  };
};

type NavButtonProps = {
  title: string;
  state: "focus" | "unfocus";
  sx?: CSSProperties;
};

const NavButtonConfig: NavButtonConfig = {
  focus: {
    textColor: "text-primary",
  },
  unfocus: {
    textColor: "text-[#888888]",
  },
};

const NavButton = ({ title, sx, state }: NavButtonProps) => {
  return (
    <div
      className={`jpm:ml-4 jpm:mr-4 ml-2 mr-2 h-[51px] flex items-center relative ${NavButtonConfig[state].textColor} transition-colors duration-300`}
      style={sx}
    >
      <p>{title}</p>
      {state === "focus" && (
        <div className="w-1/2 h-[2px] bg-primary absolute left-[25%] bottom-0"></div>
      )}
    </div>
  );
};

export default NavButton;
