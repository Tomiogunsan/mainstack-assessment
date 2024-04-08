import { middleNav } from "@constants/nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center m-6 border-[2px] border-[#fff] rounded-[100px] shadow-sm shadow-[#2D3B43]/50 h-[64px] px-[38px]">
      <div>a</div>
      <div className="flex ">
        {middleNav.map((ele) => {
          return (
            <Link
              to={ele.path}
              className="pr-8  font-[600] text-[16px] leading-5 text-gray"
            >
              {ele.name}
            </Link>
          );
        })}
      </div>
      <div>c</div>
    </div>
  );
};

export default Navbar;
