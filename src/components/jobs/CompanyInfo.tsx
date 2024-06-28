export type CompanyInfoProps = {
  logo: string;
  companyName: string;
  companySize: string;
  sector: string;
  foundedIn: string;
  type: string;
  funding: string;
  foundedBy: string;
};

type InfoObj = {
  title: string;
  value: string;
};

const CompanyInfo = ({
  logo,
  companyName,
  companySize,
  sector,
  foundedIn,
  type,
  funding,
  foundedBy,
}: CompanyInfoProps) => {
  const infoObjLhs: InfoObj[] = [
    { title: "Company size", value: companySize },
    { title: "Sector", value: sector },
    { title: "Founded in", value: foundedIn },
  ];
  const infoObjRhs: InfoObj[] = [
    { title: "Type", value: type },
    { title: "Funding", value: funding },
    { title: "Founded by", value: foundedBy },
  ];

  return (
    <div className="w-full jpm:ml-4">
      <div className="flex items-center header w-fit">
        <img src={logo} alt="company-logo" className="w-[40px] h-[40px] mr-2" />
        <p className="font-medium text-[1rem] text-[#4F4F4F]">{companyName}</p>
      </div>
      <div className="w-full mt-4 info tablet:flex">
        <div className="lhs w-fit tablet:mr-12">
          {infoObjLhs.map((info, i) => {
            return (
              <div className="mb-2" key={i}>
                <p className="text-[14px] font-medium text-[#6E6D6D]">
                  {info.title}
                </p>
                <p className="text-[16px] font-medium text-[#3D3D3D]">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="rhs w-fit">
          {infoObjRhs.map((info, i) => {
            return (
              <div className="mb-2" key={i}>
                <p className="text-[14px] font-medium text-[#6E6D6D]">
                  {info.title}
                </p>
                <p className="text-[16px] font-medium text-[#3D3D3D]">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
