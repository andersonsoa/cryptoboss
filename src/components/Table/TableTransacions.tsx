type Data = {
  id: number;
  price: string;
  amounth: string;
  total: string;
  type: string;
};

interface TableTransactionsProps {
  data: Data[];
}

export const TableTransacions: React.FC<TableTransactionsProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th role="columnheader" className="p-2 text-left text-gray-500 text-xs">
            Price (BTC)
          </th>
          <th role="columnheader" className="p-2 text-left text-gray-500 text-xs">
            Amouth (BTC)
          </th>
          <th role="columnheader" className="p-2 text-left text-gray-500 text-xs">
            Total (BTC)
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr role="row" key={item.id}>
            <td className={`p-2 font-bold text-${item.type === "sell" ? "red" : "green"}-400 text-xs`}>{item.price}</td>
            <td className="p-2 font-bold text-xs">{item.amounth}</td>
            <td className="p-2 font-bold text-xs">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
