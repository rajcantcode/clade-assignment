export type AboutTheJobProps = {
  responsibilities: string[];
  benefits: string[];
  schedule: string[];
  suppPayTypes: string[];
  workLocation: string;
};

const AboutTheJob = ({
  responsibilities,
  benefits,
  schedule,
  suppPayTypes,
  workLocation,
}: AboutTheJobProps) => {
  return (
    <div className="w-full jpm:ml-4">
      {/* About the job */}
      <div className="about w-fit">
        <p className="font-medium text-[14px] text-[#6E6D6D] mr-3 jpm:mr-0">
          About the job
        </p>
        <div className="mt-2 responsibilities">
          {responsibilities.map((responsibility, i) => {
            return (
              <p className="font-medium text-[16px] text-[#3D3D3D]" key={i}>
                {i + 1}. {responsibility}
              </p>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-2 benefits w-fit">
        <p className="font-medium text-[16px] text-[#3D3D3D]">Benefits:</p>
        <ul>
          {benefits.map((benefit, i) => {
            return (
              <li
                className="font-medium text-[16px] text-[#3D3D3D] list-disc ml-5"
                key={i}
              >
                {benefit}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Schedule */}
      <div className="mt-2 schedule w-fit">
        <p className="font-medium text-[16px] text-[#3D3D3D]">Schedule:</p>
        <ul>
          {schedule.map((item, i) => {
            return (
              <li
                className="font-medium text-[16px] text-[#3D3D3D] list-disc ml-5"
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Supplemental pay types */}
      <div className="mt-2 payType w-fit">
        <p className="font-medium text-[16px] text-[#3D3D3D]">
          Supplemental pay types:
        </p>
        <ul>
          {suppPayTypes.map((type, i) => {
            return (
              <li
                className="font-medium text-[16px] text-[#3D3D3D] list-disc ml-5"
                key={i}
              >
                {type}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Work Location */}
      <div className="mt-2 work-location w-fit">
        <p className="font-medium text-[16px] text-[#3D3D3D]">
          Work Location: {workLocation}
        </p>
      </div>
    </div>
  );
};

export default AboutTheJob;
