import CoinsStacked from "../../icons/CoinsStacked";
import MarkerPin from "../../icons/MarkerPin";
import Edit from "../../icons/Edit";
import Dustbin from "../../icons/Dustbin";

type JobHeaderProps = {
  jobTitle: string;
  postedAgo: string;
  status: string;
  location: string;
  compensation: string;
};

const JobHeader = ({
  jobTitle,
  postedAgo,
  status,
  location,
  compensation,
}: JobHeaderProps) => {
  return (
    <>
      <div className="w-full jpm:flex jpm:items-center job-title jpm:ml-4">
        {/* heading with edit, delete and info button for small screen devices*/}
        <div className="flex items-center justify-between w-full jpm:hidden">
          <h3 className="text-[1.5rem] tablet:text-[1.8rem] text-[#3D3D3D] font-semibold jpm:hidden">
            {jobTitle}
          </h3>
          <div className="flex btn-container w-fit">
            <button className="flex items-center p-2 border border-solid rounded-full border-primary bg-[#FEF4F2] ml-1 mr-1">
              <Dustbin />
            </button>
            <button className="flex items-center justify-center rounded-full border-solid border border-[#FED3CA] bg-primary p-2 ml-1 mr-1">
              <Edit />
            </button>
          </div>
        </div>

        {/* heading for large screen devices */}
        <h3 className="text-[1.5rem] tablet:text-[1.8rem] text-[#3D3D3D] font-semibold hidden jpm:block">
          {jobTitle}
        </h3>

        {/* separator */}
        <div className="separator mx-[12px] rounded-full w-[5px] h-[5px] bg-[#D1D1D1] hidden jpm:block"></div>

        {/* posted ago */}
        <div className="flex items-center meta-data">
          <span className="text-[#888888] text-[0.7rem] mr-[12px] ml-[2.5px] jpm:ml-0">
            {postedAgo}
          </span>

          {/* status */}
          <div className="flex items-center status w-fit bg-[#ECFDF3] rounded-[25px] px-2 border border-solid border-[#ABEFC6] badge">
            <div className="dot bg-[#17B26A] mr-[5px] rounded-full w-[5px] h-[5px]"></div>
            <p className="text-[#067647] text-[12px]">{status}</p>
          </div>
        </div>
      </div>

      {/* location and compensation */}
      <div className="flex items-center w-full location-compensation text-[#5D5D5D] mt-2 jpm:ml-4">
        <div className="flex items-center location">
          <MarkerPin />
          <span className="ml-1">{location}</span>
        </div>
        <div className="separator mx-[12px] rounded-full w-[5px] h-[5px] bg-[#D1D1D1]"></div>
        <div className="flex items-center compensation">
          <CoinsStacked />
          <span className="ml-1">{compensation}</span>
        </div>
      </div>
    </>
  );
};

export default JobHeader;
