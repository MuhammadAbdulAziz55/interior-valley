import { Link } from "react-router-dom";
import { TfiAlignLeft, TfiClose } from "react-icons/tfi";
import { useState } from "react";
import cartIcon from "../../assets/icons/header/cart.svg"
import helpIcon from "../../assets/icons/header/help.svg"
import logo from "../../assets/icons/header/interior-valley-logo.png";

import SearchBar from "./SearchBar";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    // phone navbar icon change
    const handelChangeIcon = () => {
      setOpen((prevState) => !prevState);
    };
  return (
    <nav className="container relative mx-auto flex justify-between pb-[13px]  pt-[53px] text-[16px] font-medium text-[#FFF]  md:py-[30px]">
    {/* phone menu item  */}
    <div className="flex items-center md:hidden">
      {open ? (
        <TfiClose className="text-2xl" onClick={handelChangeIcon} />
      ) : (
        <TfiAlignLeft className="text-2xl" onClick={handelChangeIcon} />
      )}
    </div>
    {/* Logo */}
    <div className="relative h-[27px] w-[81px] text-xl uppercase md:h-[58px] md:w-[170px]">
      <Link href="/" className="group">
        <img
          src={logo}
          alt="logo"
          
          className="object-contain transition-all group-active:scale-90"
        />
      </Link>
    </div>
    {/* Search Bar */}
    <div className="hidden w-[470px] items-center md:flex">
      <SearchBar border={false} />
    </div>
    {/* Right Section with Icons/Links */}
    <div className="flex h-auto w-auto items-center gap-6">
      <Link
        href="/faq and services"
        className="hidden transition-all active:scale-90 md:flex"
      >
        <img
          className="max-w-none"
          src={helpIcon}
          height={28}
          width={28}
          alt="FAQ image not found"
        />
      </Link>
      {/* <Link href={`/cart?userId=${user?.uid}`}></Link> */}
      <Link href={`/cart`} className="transition-all active:scale-90">
        <div className="relative">
          <img
            className="max-w-none"
            src={cartIcon}
            height={28}
            width={28}
            alt="Cart image not found "
          /> 
          {/* {typeof window !== 'undefined' && (
              )} */}
           <span className="absolute right-0 top-0 -mr-2 -mt-2 h-[25px] w-[25px]  rounded-full bg-red-500 px-2 py-1 text-xs  text-white">
            {/* {cart?.length || 0} */}
          </span>
        </div>
      </Link>

      <Link href="/phone-signup" className="transition-all active:scale-90">
          <span>Login/Register</span>
        </Link>

      {/* {user ? (
        <div className="group/user_profile relative flex-grow">
          <button>
            <image
              className="max-w-none"
              src={userIcon}
              height={28}
              width={28}
              alt="userIcon not found "
            />
          </button>
          <div className="absolute z-10">
            <div className="mt-5"></div>
            <div
              className={`2xl:ml-0 z-10 ml-[-120px] hidden min-w-[150px]  rounded-md bg-[#000000]  p-3 text-white group-hover/user_profile:block  md:ml-[-110px] lg:ml-[-100px] xl:ml-[-50px]`}
            >
              <ul className={`leading-8`}>
                <Link href="/">
                  <li>User Profile</li>
                </Link>

                <li>
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="relative top-[1px] transition-transform group-hover:translate-x-1 group-active:translate-x-0"
                  >
                    <span className="inline">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/phone-signup" className="transition-all active:scale-90">
          <span>Login/Register</span>
        </Link>
      )}  */}
    </div>
  </nav>
  )
}
