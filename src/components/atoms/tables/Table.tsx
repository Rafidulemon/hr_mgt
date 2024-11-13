type TableProps = {
  headers: string[];
  rows: Array<Record<string, string | number>>;
  className?: string;
};

export function Table(props: TableProps) {
  const { headers, rows, className } = props;
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b border-black">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left py-2 px-4 font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-300">
              {headers.map((header, headerIndex) => (
                <td key={headerIndex} className="py-2 px-4 text-gray-600">
                  {row[header] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
