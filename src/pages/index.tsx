import { NextPage } from "next";
import dynamic from "next/dynamic";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { TableCurrency } from "../components/Table/TableCurrency";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

const Home: NextPage = () => {
  const cryptoData = [
    {
      id: 1,
      name: "Bitcoin",
      Icon: FaBitcoin,
      price: "$ 5,289.00",
      change24h: {
        percent: "6,32%",
        direction: "up",
      },
      change7d: {
        percent: "3,85%",
        direction: "up",
      },
      change1m: {
        percent: "2,32%",
        direction: "down",
      },
      change1y: {
        percent: "1,32%",
        direction: "down",
      },
      marketCap: "$ 6,042,000.00",
    },
    {
      id: 2,
      name: "Ethereum",
      Icon: FaEthereum,
      price: "$ 4,242.80",
      change24h: {
        percent: "6,35%",
        direction: "up",
      },
      change7d: {
        percent: "4,25%",
        direction: "down",
      },
      change1m: {
        percent: "7,91%",
        direction: "up",
      },
      change1y: {
        percent: "3,00%",
        direction: "up",
      },
      marketCap: "$ 3,042,000.00",
    },
    {
      id: 3,
      name: "Binance",
      Icon: SiBinance,
      price: "$ 7,485.02",
      change24h: {
        percent: "4,02%",
        direction: "up",
      },
      change7d: {
        percent: "3,46",
        direction: "up",
      },
      change1m: {
        percent: "4,68%",
        direction: "up",
      },
      change1y: {
        percent: "4,31%",
        direction: "down",
      },
      marketCap: "$ 4,042,900.32",
    },
  ];

  return (
    <div className="px-6 pb-6">
      <Header />

      <div className="space-y-6">
        <Container>
          <div className="space-y-3">
            <p className="text-3xl font-bold">Overview</p>
            <div className="flex gap-4">
              {/* activated */}
              <div className="text-sm flex items-center gap-1 cursor-pointer text-gray-300">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400" /> BTC
              </div>

              {/* deactivated */}
              <div className="text-sm flex items-center gap-1 cursor-pointer text-gray-500">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-500" /> XMR
              </div>
              <div className="text-sm flex items-center gap-1 cursor-pointer text-gray-500">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-500" /> LTC
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Chart />
          </div>
        </Container>

        <Container>
          <TableCurrency cryptos={cryptoData} />
        </Container>
      </div>
    </div>
  );
};

export default Home;
