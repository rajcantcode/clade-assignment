// This component is used to render the links in the navigation bar in the header

import { ElementType, CSSProperties } from "react";
import { Link } from "react-router-dom";
type NavLinkConfig = {
  focus: {
    bgColor: string;
    borderColor: string;
    textColor: string;
    iconColor: string;
  };
  unfocus: {
    bgColor: string;
    borderColor: string;
    textColor: string;
    iconColor: string;
  };
};

type NavLinkProps = {
  startIcon: ElementType;
  title: string;
  state: "focus" | "unfocus";
  to: string;
  sx?: CSSProperties;
};

const NavLinkConfig: NavLinkConfig = {
  focus: {
    bgColor: "bg-primary",
    borderColor: "border-borderHighlight",
    textColor: "text-white",
    iconColor: "white",
  },
  unfocus: {
    bgColor: "bg-white",
    borderColor: "border-[#FFFFFF]",
    textColor: "text-[#B0B0B0]",
    iconColor: "#B0B0B0",
  },
};

const NavLink = ({
  startIcon: StartIcon,
  title,
  state,
  to,
  sx,
}: NavLinkProps) => {
  return (
    <Link to={to}>
      <div
        className={`flex items-center nav-button w-fit rounded-[49px] px-2 py-2 ${NavLinkConfig[state].bgColor} ${NavLinkConfig[state].textColor} ${NavLinkConfig[state].borderColor} border-2 border-solid transition-colors duration-300 ml-2 mr-2`}
        style={sx}
      >
        <StartIcon color={NavLinkConfig[state].iconColor} state={state} />
        <p className="hidden ml-2 tablet:block">{title}</p>
      </div>
    </Link>
  );
};

export default NavLink;
