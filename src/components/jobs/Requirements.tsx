export type skill = {
  name: string;
  img: string;
};
type ReuirementProps = {
  skills: skill[];
  language: string;
  type: string;
  exp: string;
};

const Requirements = ({ skills, language, type, exp }: ReuirementProps) => {
  return (
    <div className="w-full jpm:flex jpm:ml-4 jpm:justify-between jpm:flex-wrap">
      <div className="flex items-center skills jpm:flex-col jpm:items-start">
        <p className="font-medium text-[14px] text-[#6E6D6D] mr-3 jpm:mr-0">
          Skills Required
        </p>
        <div className="flex flex-wrap items-center w-fit jpm:flex-col jpm:items-start">
          {skills.map((skill) => {
            return (
              <div
                className="skill-badge w-fit border-[#D0D5DD] border-solid border flex items-center p-1 rounded-[6px] jpm:mt-[8px] cursor-default mr-1 jpm:mr-0"
                key={skill.name}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-[16px] h-[16px] mr-[5px]"
                />
                <p className="font-medium text-[12px] text-[#344054]">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center mt-4 language jpm:flex-col jpm:items-start jpm:mt-0">
        <p className="font-medium text-[14px] text-[#6E6D6D] mr-3 jpm:mr-0">
          Preferred Language
        </p>
        <p className="font-semibold text-[16px]">{language}</p>
      </div>
      <div className="flex items-center mt-4 type jpm:flex-col jpm:items-start jpm:mt-0">
        <p className="font-medium text-[14px] text-[#6E6D6D] mr-3 jpm:mr-0">
          Type
        </p>
        <p className="font-semibold text-[16px]">{type}</p>
      </div>
      <div className="flex items-center mt-4 experience jpm:flex-col jpm:items-start jpm:mt-0">
        <p className="font-medium text-[14px] text-[#6E6D6D] mr-3 jpm:mr-0">
          Years of Experience
        </p>
        <p className="font-semibold text-[16px]">{`${exp} Years of Experience`}</p>
      </div>
    </div>
  );
};

export default Requirements;
