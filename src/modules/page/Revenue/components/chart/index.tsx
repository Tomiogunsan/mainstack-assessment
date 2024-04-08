import { useGetWallet } from "@hooks/revenue/useGetWallet";

const Chart = () => {
    const {walletData} = useGetWallet()
  return (
    <div className=" col-span-2">
      <div className="flex gap-[64px] items-center">
        <div>
          <p>Available Balance</p>
          <p className="text-[36px] leading-[48px] font-bold text-black">
            USD <span>{walletData?.balance.toFixed(2)}</span>
          </p>
        </div>

       
        <button className="text-[16px] leading-[24px] font-[600] text-[#fff] bg-black  py-[14px] rounded-[100px] w-[167px]">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Chart;
