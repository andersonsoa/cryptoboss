import { HiOutlineChartPie, HiOutlineChartSquareBar, HiOutlineChat } from "react-icons/hi";
import { RiAppsLine, RiSettings3Line } from "react-icons/ri";
import { SidebarLink } from "./SidebarLink";
import { SidebarLogo } from "./SidebarLogo";

interface SidebarProps {
  path: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ path }) => {
  return (
    <div className="bg-[#1f1f1f] pt-10">
      {/* Logo */}
      <SidebarLogo />

      <nav className="flex justify-center mt-6 py-5">
        <ul className="space-y-10 w-full text-gray-400 text-2xl">
          <SidebarLink href="/" Icon={RiAppsLine} active={path === "/"} />
          <SidebarLink href="/charts" Icon={HiOutlineChartPie} active={path === "/charts"} />
          <SidebarLink href="/messages" Icon={HiOutlineChat} active={path === "/messages"} />
          <SidebarLink href="/dashboard" Icon={HiOutlineChartSquareBar} active={path === "/dashboard"} />
          <SidebarLink href="/settings" Icon={RiSettings3Line} active={path === "/settings"} />
        </ul>
      </nav>
    </div>
  );
};
