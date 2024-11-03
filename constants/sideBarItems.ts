import { IconType } from "react-icons";
import { FaUserPlus } from "react-icons/fa";
import { TiHome, TiUser } from "react-icons/ti";

interface sideBarItemType {
  title: string;
  route: string;
  Icon: IconType;
}

const sideBarItems: sideBarItemType[] = [
  {
    title: "Dashboard",
    route: "/",
    Icon: TiHome,
  },
  {
    title: "Karyawan",
    route: "/employees",
    Icon: TiUser,
  },
  {
    title: "Add Karyawan",
    route: "/new-employee",
    Icon: FaUserPlus,
  },
  {
    title: "Divisi",
    route: "/divisi",
    Icon: TiUser,
  },
  {
    title: "Jabatan",
    route: "/jabatan",
    Icon: TiUser,
  },
];

export default sideBarItems;
