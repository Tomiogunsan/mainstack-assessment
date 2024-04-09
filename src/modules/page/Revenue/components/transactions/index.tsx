

const Transaction = () => {
  return (
    <div className="px-[140px] pt-[82px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[24px] leading-8 font-bold text-black">
            24 Transactions
          </p>
          <p className="text-[14px] leading-4 font-medium text-gray">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-[20px] py-[12px] rounded-[100px] bg-lightGray text-black text-[16px] leading-6 font-[600]">
            Filter
          </button>
          <button className="px-[20px] py-[12px] rounded-[100px] bg-lightGray text-black text-[16px] leading-6 font-[600]">
            Export list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction