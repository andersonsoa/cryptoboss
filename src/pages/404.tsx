import { NextPage } from "next";
import { FaSadCry } from "react-icons/fa";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col gap-10 h-full justify-center items-center text-2xl text-gray-400">
      <span>Esta página não existe</span>
      <FaSadCry className="text-8xl text-yellow-500" />
    </div>
  );
};

export default NotFound;
