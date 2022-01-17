import { RiSearch2Line } from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <header className="flex py-10 items-center justify-between">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Welcome Back, Anderson!</h2>
        <p className="text-gray-500 text-md">You are amazing, lets control your Crypto!</p>
      </div>

      <div className="flex text-xl bg-[#1f1f1f] px-6 py-2 rounded-md items-center space-x-6">
        <RiSearch2Line className="text-gray-500 text-2xl" />
        <input type="text" placeholder="Search Now..." className="bg-transparent focus:outline-none placeholder:text-gray-500" />
      </div>
    </header>
  );
};
