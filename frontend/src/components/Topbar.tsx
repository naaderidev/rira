import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass, HiOutlinePower } from "react-icons/hi2";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 border-b-2 border-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="profile"
            className="flex-center rounded-full w-10 h-10 md:w-16 md:h-16 border-2 border-zinc-700"
          />
          <div className="hidden md:block font-VazirMedium text-zinc-700">
            <h1 className="text-base text-start">بهاره نادری</h1>
            <h3 className="text-sm text-start">09383961290</h3>
            <h6 className="text-sm text-start">naaderidev@gmail.com</h6>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <div className="hidden md:flex-center bg-white px-3 py-1 rounded-md">
              <input
                type="search"
                placeholder="جستجو کنید..."
                className="text-sm font-VazirMedium border-none outline-none bg-transparent"
              />
              <button className="hover:text-blue transition-colors">
                <HiOutlineMagnifyingGlass className="icon-md" />
              </button>
            </div>
            <Link to="/" className="hover:text-gold transition-colors">
              <HiOutlinePower className="icon-md" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
