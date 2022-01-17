import NextImage from "next/image";
import { RiNotification2Line } from "react-icons/ri";
import { Input } from "./Form/Input";
import { Sidebar } from "./Sidebar/Sidebar";
import { TableTransacions } from "./Table/TableTransacions";

interface LayoutProps {
  asPath: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, asPath }) => {
  const data = [
    {
      id: 1,
      price: "50002.35",
      amounth: "42553.588",
      total: "50000.00",
      type: "buy",
    },
    {
      id: 2,
      price: "87002.35",
      amounth: "75553.588",
      total: "60000.00",
      type: "sell",
    },
    {
      id: 3,
      price: "40002.35",
      amounth: "40153.588",
      total: "30000.00",
      type: "sell",
    },
    {
      id: 4,
      price: "86556.75",
      amounth: "41000.588",
      total: "60002.00",
      type: "buy",
    },
    {
      id: 5,
      price: "68555.90",
      amounth: "58666.588",
      total: "99991.00",
      type: "buy",
    },
  ];

  return (
    <section className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar path={asPath} />

      {/* main content */}
      <main className="flex-1 overflow-y-scroll scrollbar-hide">{children}</main>

      {/* aside */}
      <aside className="max-w-sm w-full bg-[#1f1f1f] p-8">
        {/* Profile */}
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center gap-4">
            <NextImage src="/profile.jpg" width={36} height={36} className="rounded-full" />
            <span className="text-gray-300 text-xl">Anderson S.</span>
          </div>

          <div className="grid place-items-center text-xl cursor-pointer">
            <RiNotification2Line />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <h2 className="text-xl text-gray-500">Buy & Sell BTC</h2>

          <div className="space-y-2">
            <Input label="Price (BTC)" name="price" />
            <Input label="Amorth (BTC)" name="amorth" />
            <Input label="Total (BTC)" name="total" />
          </div>

          <div className="flex space-x-6">
            <button className="flex-1 cursor-pointer hover:brightness-95 bg-green-600 font-bold rounded-md p-2">Buy</button>
            <button className="flex-1 cursor-pointer hover:brightness-95 bg-red-600 font-bold rounded-md p-2">Sell</button>
          </div>
        </form>

        {/* Table */}
        <div className="mt-6">
          <TableTransacions data={data} />
        </div>
      </aside>
    </section>
  );
};
