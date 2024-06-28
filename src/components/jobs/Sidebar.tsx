import Dustbin from "../../icons/Dustbin";
import Edit from "../../icons/Edit";
import Applicant from "../../icons/Applicant";
import Matches from "../../icons/Matches";
import MessageSquare from "../../icons/MessageSquare";
import Eye from "../../icons/Eye";

export type SidebarProps = {
  applicants: number;
  matches: number;
  messages: number;
  views: number;
};

type statistic = {
  title: string;
  value: number;
  icon: JSX.Element;
};

const Sidebar = ({ applicants, matches, messages, views }: SidebarProps) => {
  const statistics: statistic[] = [
    { title: "Applicants", value: applicants, icon: <Applicant /> },
    { title: "Matches", value: matches, icon: <Matches /> },
    {
      title: "Messages",
      value: messages,
      icon: <MessageSquare color="#4F4F4F" />,
    },
    { title: "Views", value: views, icon: <Eye /> },
  ];

  return (
    <div>
      {/* Buttons */}
      <div className="flex justify-between w-full btn-wrapper text-[16px] font-medium">
        <button className="flex items-center justify-center px-2 py-1 border border-solid text-primary border-primary bg-[#FEF4F2] rounded-[8px] min-w-[48%] max-w-[auto]">
          <div className="flex items-center">
            <Dustbin />
            <span className="ml-2">Delete job</span>
          </div>
        </button>
        <button className="flex items-center justify-center px-2 py-1 text-white rounded-[8px] border-solid border border-[#FED3CA] bg-primary min-w-[48%] max-w-[auto]">
          <div className="flex items-center">
            <Edit />
            <span className="ml-2">Edit job</span>
          </div>
        </button>
      </div>

      {/* statistics */}
      <div className="w-full mt-4 job-stats">
        {statistics.map((stat, i) => {
          return (
            <div
              className="py-4 border-b border-solid border-borderGrey px-0.5 flex items-center justify-between"
              key={i}
            >
              <div className="flex items-center title w-fit">
                <div className="w-[20px] h-[20px]">{stat.icon}</div>
                <p className="ml-2 text-[16px] text-[#4F4F4F]">{stat.title}</p>
              </div>
              <div className="value font-semibold text-[20px] text-[#3D3D3D]">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
