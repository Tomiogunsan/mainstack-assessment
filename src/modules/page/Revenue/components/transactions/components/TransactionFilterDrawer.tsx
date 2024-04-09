import { useForm } from "react-hook-form";
import Drawer from "shared/Drawer";
import FilterStartEndDate from "shared/Filter/FilterStartEndDate";
import ControlledSelect from "shared/Select/ControlledSelect";

const TransactionFilterDrawer = ({ onClose }: { onClose: () => void }) => {
  const { control } = useForm();
  return (
    <Drawer onClose={onClose} header="Filter">
      <div className="px-[18px] grid gap-y-4">
        <div className="flex w-full">
          <button className="cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black">
            Today
          </button>
          <button className=" cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
            Last 7 days
          </button>
          <button className=" cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
            This month
          </button>
          <button className=" cursor-pointer border-[1px] rounded-[100px] px-[10px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
            Last 3 months
          </button>
        </div>

        <FilterStartEndDate
          control={control}
          label="Date Range"
          name={{
            start: "start_date",
            end: "end_date",
          }}
          cellsClassName="rounded-[12px] border-[3px] "
          
        />

        <ControlledSelect options={[{
            label: 'man',
            value: 'woman'
        }]} name='type' control={control} label='Transaction Type'/>
      </div>
    </Drawer>
  );
};

export default TransactionFilterDrawer;
