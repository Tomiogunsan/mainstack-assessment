import Chart from "./components/chart";
import Navbar from "../../../components/navbar"
import SideIcons from "./components/sideIcons"
import Transaction from "./components/transactions";
import Wallet from "./components/wallet";


const Revenue = () => {
  return (
    <>
      <Navbar />
      <div className="flex  mx-[140px] pt-[54px]">
        <SideIcons />
        <div className="grid grid-cols-3  gap-[107px] w-full">
            <Chart/>
            <Wallet/>
        </div>
      </div>
      <Transaction/>
    </>
  );
}

export default Revenue