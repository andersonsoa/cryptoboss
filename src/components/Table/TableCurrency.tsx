import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type TableRow = {
  id: number;
  name: string;
  Icon: React.ElementType;
  price: string;
  change24h: {
    percent: string;
    direction: string;
  };
  change7d: {
    percent: string;
    direction: string;
  };
  change1m: {
    percent: string;
    direction: string;
  };
  change1y: {
    percent: string;
    direction: string;
  };
  marketCap: string;
};

interface TableCurrencyProps {
  cryptos: TableRow[];
}

export const TableCurrency: React.FC<TableCurrencyProps> = ({ cryptos }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            24h%
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            7d%
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            1m%
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            1y%
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody className="divide-gray-900">
        {cryptos.map(({ Icon, change1m, change1y, change24h, change7d, id, marketCap, name, price }) => (
          <tr key={id}>
            <td className="px-6 py-4 text-gray-500 font-bold">{id}</td>
            <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
              <div className="flex gap-2 items-center">
                <Icon /> {name}
              </div>
            </td>
            <td className="px-6 py-4 text-gray-300 font-bold whitespace-nowrap">{price}</td>
            <td
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap ${
                change24h.direction === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="flex gap-2 items-center">
                {change24h.direction === "up" ? <FaChevronUp /> : <FaChevronDown />} {change24h.percent}
              </div>
            </td>
            <td
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap ${change7d.direction === "up" ? "text-green-500" : "text-red-500"}`}
            >
              <div className="flex gap-2 items-center">
                {change7d.direction === "up" ? <FaChevronUp /> : <FaChevronDown />} {change7d.percent}
              </div>
            </td>
            <td
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap ${change1m.direction === "up" ? "text-green-500" : "text-red-500"}`}
            >
              <div className="flex gap-2 items-center">
                {change1m.direction === "up" ? <FaChevronUp /> : <FaChevronDown />} {change1m.percent}
              </div>
            </td>
            <td
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap ${change1y.direction === "up" ? "text-green-500" : "text-red-500"}`}
            >
              <div className="flex gap-2 items-center">
                {change1y.direction === "up" ? <FaChevronUp /> : <FaChevronDown />} {change1y.percent}
              </div>
            </td>
            <td className="px-6 py-4 text-gray-300 font-bold whitespace-nowrap">{marketCap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
