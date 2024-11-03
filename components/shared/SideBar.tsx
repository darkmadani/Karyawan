"use client";

import sideBarItems from "@/constants/sideBarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 z-20 h-screen lg:flex hidden">
      <div className="w-fit min-h-full bg-base-200 p-4 pt-20">
        {/* Profil Pengguna */}
        <div className="flex items-center gap-2 p-4 mb-6">
          <FaUserCircle className="text-5xl text-gray-400" />
          <div>
            <p className="font-semibold text-lg">Welcome, Difa Madani</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>

        {/* Sidebar content here */}
        <ul className="menu menu-lg gap-3">
          {sideBarItems.map((item, index) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <li key={index}>
                <Link href={item.route} className={`${isActive && "active"}`}>
                  <item.Icon className="text-xl" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Page content here */}
      </div>
    </div>
  );
};

export default SideBar;
