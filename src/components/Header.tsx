import { Link } from "react-router-dom";
import CoinsHand from "../icons/CoinsHand";
import MessageSquare from "../icons/MessageSquare";
import Briefcase from "../icons/Briefcase";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Bell from "../icons/Bell";
import ChevronDown from "../icons/ChevronDown";
// import profile from "profile.png";

type LinkState = {
  jobs: "focus" | "unfocus";
  messages: "focus" | "unfocus";
  payments: "focus" | "unfocus";
};

const Header = () => {
  const [linkState, setLinkState] = useState<LinkState>({
    jobs: "unfocus",
    messages: "unfocus",
    payments: "unfocus",
  });
  const location = useLocation();

  useEffect(() => {
    const temp: LinkState = {
      jobs: "unfocus",
      messages: "unfocus",
      payments: "unfocus",
    };
    if (location.pathname === "/") {
      setLinkState({ ...temp });
    } else if (location.pathname === "/jobs") {
      setLinkState({ ...temp, jobs: "focus" });
    } else if (location.pathname === "/messages") {
      setLinkState({ ...temp, messages: "focus" });
    } else if (location.pathname === "/payments") {
      setLinkState({ ...temp, payments: "focus" });
    }
  }, [location]);

  return (
    <header
      className="fixed flex items-center justify-between w-full px-2 tablet:px-4 py-2 bg-white border-b border-solid border-borderGrey h-[90px] backdrop-blur-sm z-10"
      style={{ background: "rgba(255, 255, 255, 0.18)" }}
    >
      {/* LHS Logo */}
      <div className="logo bg-[#E7E7E7] w-fit py-2 px-4 text-primary">
        <Link to="/">Logo</Link>
      </div>

      {/* Centre Navbar */}
      <div className="bg-white navbar border-borderGrey border-solid flex items-center p-1 rounded-[36px] justify-between border">
        <NavLink
          startIcon={Briefcase}
          title="Jobs"
          to="/jobs"
          state={linkState.jobs}
        />
        <NavLink
          startIcon={MessageSquare}
          title="Messages"
          to="/messages"
          state={linkState.messages}
        />
        <NavLink
          startIcon={CoinsHand}
          title="Payments"
          to="/payments"
          state={linkState.payments}
        />
      </div>

      {/* RHS Notification */}
      <div className="flex items-center tablet:p-1.5 cursor-pointer notifications w-fit">
        <div className="p-1.5 mr-2 transition-colors rounded-full hover:bg-[#cdcbcb] duration-300 relative">
          <Bell />
          <div className="notification-dot w-[6px] h-[6px] absolute bg-primary top-[6.5px] right-[12px] rounded-full"></div>
        </div>
        <div className="flex items-center w-fit">
          <img src={"profile.png"} alt="profile" />
          <ChevronDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
