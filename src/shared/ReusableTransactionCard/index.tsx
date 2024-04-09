import { IReusableTransactionProps } from "./interface";

const ReusableTransactionCard = ({isMetaData , amount,date, depositorName, productName, withdrawalStatus}: IReusableTransactionProps) => {
  return (
    <>
      {isMetaData && (
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="rounded-full bg-[#E3FCF2] h-[48px] w-[48px]" />
            <div className="grid gap-y-2">
              <p className="text-[16px] leading-6 font-medium text-black">
                {productName}
              </p>
              <p className="text-[14px] leading-4 font-medium text-gray">
                {depositorName}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[16px] leading-[24px] font-[700] text-black">
              USD<span>{amount}</span>
            </p>
            <p className="text-[14px] laeding-[16px] font-[500] text-gray">
              {date}
            </p>
          </div>
        </div>
      )}
      {!isMetaData && (
        <div>
          <div className="flex gap-2">
            <div className="rounded-full bg-[#F9E3E0] h-[48px] w-[48px]" />
            <div className="grid gap-y-2">
              <p className="text-[16px] leading-6 font-medium text-black">
                {productName}
              </p>
              <p className="text-[14px] leading-4 font-medium text-gray">
                {withdrawalStatus}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[16px] leading-[24px] font-[700] text-black">
              USD<span>{amount}</span>
            </p>
            <p className="text-[14px] laeding-[16px] font-[500] text-gray">
              {date}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ReusableTransactionCard;
