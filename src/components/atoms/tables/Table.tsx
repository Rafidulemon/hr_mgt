type DynamicColor = {
  columnName: string;
  textColors: {
    text: string;
    color: string;
  }[];
};

type TableProps = {
  headers: string[];
  rows: Array<Record<string, string | number>>;
  className?: string;
  dynamicColorValues?: DynamicColor[];
};

export function Table(props: TableProps) {
  const { headers, rows, className, dynamicColorValues } = props;
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
              {headers.map((header, headerIndex) => {
                const dynamicColorConfig = dynamicColorValues?.find(
                  (colorConfig) => colorConfig.columnName === header
                );

                const textColors = dynamicColorConfig?.textColors?.find(
                  (textColor) => {
                    if (row[header] === textColor?.text) {
                      return textColor?.color;
                    }
                    return null;
                  }
                )?.color;

                console.log(textColors);
                return (
                  <td
                    key={headerIndex}
                    className={`${
                      textColors ? `text-[${textColors}]` : " text-gray-600"
                    } py-2 px-4 `}
                  >
                    {row[header] || "N/A"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
