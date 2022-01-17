import { HiHeart } from "react-icons/hi";

export const SidebarLogo: React.FC = () => {
  return (
    <div className="h-[5rem] px-6 flex items-center cursor-pointer group">
      <div className="text-3xl p-1 rounded-full text-gray-900 bg-green-400 group-hover:animate-ping">
        <HiHeart />
      </div>
    </div>
  );
};
