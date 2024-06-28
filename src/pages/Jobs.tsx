import { useEffect, useRef, useState } from "react";
import NavButton from "../components/jobs/NavButton";
import Requirements from "../components/jobs/Requirements";
import { skill } from "../components/jobs/Requirements";
import JobHeader from "../components/jobs/JobHeader";
import AboutTheJob, { AboutTheJobProps } from "../components/jobs/AboutTheJob";
import CompanyInfo from "../components/jobs/CompanyInfo";
import Sidebar, { SidebarProps } from "../components/jobs/Sidebar";

type BtnFocusState = {
  job: "focus" | "unfocus";
  applicants: "focus" | "unfocus";
  match: "focus" | "unfocus";
  messages: "focus" | "unfocus";
};

const Jobs = () => {
  const [btnFocusState, setBtnFocusState] = useState<BtnFocusState>({
    job: "focus",
    applicants: "unfocus",
    match: "unfocus",
    messages: "unfocus",
  });
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;

      // Calculate the new top position of the sidebar
      const newTop = Math.max(90 + 51 - window.scrollY, 90);
      sidebarRef.current.style.top = `${newTop}px`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills: skill[] = [
    { name: "Figma", img: "figma.png" },
    { name: "Adobe Illustrator", img: "adobeill.png" },
    { name: "Adobe XD", img: "adobeXd.png" },
  ];

  const aboutTheJobProps: AboutTheJobProps = {
    responsibilities: [
      "Handle the UI/UX research design",
      "Work on researching on latest web applications designs & trends",
      "Work on conceptualizing and visualizing",
      "Work on creating graphics content and other graphic related works",
    ],
    benefits: ["Health insurance", "Provident Fund"],
    schedule: ["Day shift"],
    suppPayTypes: ["Performance bonus", "Yearly bonus"],
    workLocation: "In person",
  };

  const companyInfoProps = {
    logo: "atlassian.png",
    companyName: "Atlassian",
    companySize: "1k - 2k Employees",
    sector: "Information Technology, Infrastructure",
    foundedIn: "2019",
    type: "Private",
    funding: "Bootstrapped",
    foundedBy: "Scott Farquhar, Mike Cannon-Brookes",
  };

  const sidebarProps: SidebarProps = {
    applicants: 400,
    matches: 100,
    messages: 147,
    views: 800,
  };

  const handleButtonState = (
    btnTitle: "job" | "applicants" | "match" | "messages"
  ) => {
    const temp: BtnFocusState = {
      job: "unfocus",
      applicants: "unfocus",
      match: "unfocus",
      messages: "unfocus",
    };
    if (btnTitle === "job") {
      setBtnFocusState({ ...temp, job: "focus" });
    } else if (btnTitle === "applicants") {
      setBtnFocusState({ ...temp, applicants: "focus" });
    } else if (btnTitle === "match") {
      setBtnFocusState({ ...temp, match: "focus" });
    } else {
      setBtnFocusState({ ...temp, messages: "focus" });
    }
  };

  return (
    <>
      <div className="flex items-center w-full h-[51px] jpm:px-10 py-2 job-nav text-[#888888] cursor-pointer border-b border-solid border-borderGrey nav-btn-container">
        <div
          onClick={() => handleButtonState("job")}
          className="nav-btn-wrapper"
        >
          <NavButton title="Job preview" state={btnFocusState.job} />
        </div>
        <div
          onClick={() => handleButtonState("applicants")}
          className="nav-btn-wrapper"
        >
          <NavButton title="Applicants" state={btnFocusState.applicants} />
        </div>
        <div
          onClick={() => handleButtonState("match")}
          className="nav-btn-wrapper"
        >
          <NavButton title="Match" state={btnFocusState.match} />
        </div>
        <div
          onClick={() => handleButtonState("messages")}
          className="nav-btn-wrapper"
        >
          <NavButton title="Messages" state={btnFocusState.messages} />
        </div>
      </div>
      <div className="w-full job-preview">
        <section className="w-full job-info jpm:w-[75%] jpmx:w-[80%]">
          <div className="job-basic-info job-preview-wrapper">
            <JobHeader
              jobTitle="Senior Product Designer"
              postedAgo="posted 2 days ago"
              status="Open"
              location="Delaware, USA"
              compensation="$300k-$400k"
            />
          </div>
          <div className="requirements job-preview-wrapper">
            <Requirements
              skills={skills}
              language="English"
              type="Full Time"
              exp="3+"
            />
          </div>
          <div className="about-the-job job-preview-wrapper">
            <AboutTheJob {...aboutTheJobProps} />
          </div>
          <div className="company-info job-preview-wrapper">
            <CompanyInfo {...companyInfoProps} />
          </div>
        </section>
        <section
          className="job-action-stats hidden jpm:block w-[25%] jpmx:w-[20%] top-[calc(90px+51px)] right-0 h-[calc(100vh-51px)] fixed px-3 py-4 border-l border-solid border-borderGrey bg-white z-10"
          ref={sidebarRef}
        >
          <Sidebar {...sidebarProps} />
        </section>
      </div>
    </>
  );
};

export default Jobs;
