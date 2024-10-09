import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBriefcase,
  HiOutlinePuzzlePiece,
  HiOutlineIdentification,
  HiOutlineClipboardDocumentList,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen border-l-2 border-white">
      <div className="flex-center border-b-2 border-white">
        <HiOutlinePuzzlePiece className="icon-md text-zinc-700" />
        <h1 className="hidden md:block text-lg text-center text-zinc-700 py-3 font-Lalezar">
          داشبورد مدیریت
        </h1>
        <HiOutlinePuzzlePiece className="icon-md text-zinc-700 rotate-180" />
      </div>
      <NavLink
        to="/org-chart"
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
      >
        <HiOutlinePresentationChartBar className="icon-md text-blue" />
        <span className="hidden md:inline-flex text-blue">چارت سازمانی</span>
      </NavLink>

      <NavLink to="/" className="nav-link">
        <HiOutlineClipboardDocumentList className="icon-md" />
        <span className="hidden md:inline-flex">برنامه ریزی</span>
      </NavLink>

      <NavLink to="/" className="nav-link">
        <HiOutlineBriefcase className="icon-md" />
        <span className="hidden md:inline-flex">پروژه ها</span>
      </NavLink>

      <NavLink to="/" className="nav-link">
        <HiOutlineUsers className="icon-md" />
        <span className="hidden md:inline-flex">تیم ها</span>
      </NavLink>

      <NavLink to="/" className="nav-link">
        <HiOutlineIdentification className="icon-md" />
        <span className="hidden md:inline-flex">پرسنل</span>
      </NavLink>

      <NavLink to="/" className="nav-link">
        <HiOutlineChatBubbleLeftRight className="icon-md" />
        <span className="hidden md:inline-flex">پیام ها</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
