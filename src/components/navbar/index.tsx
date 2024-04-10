import { middleNav } from "@constants/nav";
import { Link } from "react-router-dom";
import logo from '@assets/svg/mainstack-logo.svg'
import bell from '@assets/svg/small tertiary button.svg'
import message from '@assets/svg/Frame 6853.svg'
import menu from '@assets/svg/menu.svg'
import { useGetUser } from "@hooks/revenue/useGetUser";
import UserNavbar from "components/userNavbar";
import { useState } from "react";

const Navbar = () => {
const [showUserNav, setShowUserNav] = useState(false)
  const {userData} = useGetUser()
  return (
    <div className="flex justify-between  items-center m-6 border-[2px] border-[#fff] rounded-[100px] shadow-sm shadow-[#2D3B43]/50 h-[64px] px-[38px]">
      <div>
        <img src={logo} alt="/" />
      </div>
      <div className="flex ">
        {middleNav.map((ele, idx) => {
          return (
            <div key={idx} className="flex gap-2">
              <img src={ele.icon} alt="icon" />
              <Link
                to={ele.path}
                className="pr-8  font-[600] text-[16px] leading-5 text-gray"
              >
                {ele.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 cursor-pointer">
        <img src={bell} alt="a bell icon" />
        <img src={message} alt="a message icon" />
        <div
          className="flex items-center gap-2 bg-lightGray rounded-[100px] px-[12px] py-[4px]"
          onClick={() => {
            console.log("hi");
            setShowUserNav(true);
          }}
        >
          <p className="w-[32px] h-[32px] flex items-center p-2 rounded-full text-[#fff] text-[14px] leading-[16px] font-[600] bg-[#5C6670]">
            {userData?.first_name[0]}
            {userData?.last_name[0]}
          </p>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="absolute z-10 top-[95px] right-0 ">
        {showUserNav && <UserNavbar />}
      </div>
    </div>
  );
};

export default Navbar;