import { IReuseableWalletCardProps } from "./interface";

const ReuseableWalletCard = ({ title, amount }: IReuseableWalletCardProps) => {
  return (
    <>
      <div className="flex justify-between max-w-[271px]">
        <div className="grid gap-y-[8px]">
          <p className="text-[14px] leading-[16px] font-[500] text-gray">
            {title}
          </p>
          <p className="text-[28px] leading-[38px] font-bold text-black">
            USD <span>{amount?.toFixed(2)}</span>
          </p>
        </div>

        <p>icon</p>
      </div>
    </>
  );
};

export default ReuseableWalletCard;
