export function InvoiceTable() {
    return (
      <div className="bg-white overflow-x-auto w-full">
        <table className="border-collapse w-full">
          <thead>
            <tr className="border-y border-text_primary">
              <th className="border-r border-black text-center py-2 px-4 font-semibold text-gray-700">
                Description
              </th>
              <th className="border-r border-black text-center py-2 px-4 font-semibold text-gray-700">
                Unit Price
              </th>
              <th className="border-r border-black text-center py-2 px-4 font-semibold text-gray-700">
                Quantity
              </th>
              <th className="text-center py-2 px-4 font-semibold text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y border-text_primary">
              {/* Description for Consignment Fee and September */}
              <td className="border-r border-black text-center py-2 px-4">
                Consignment Fee
              </td>
              <td className="border-r border-black text-center py-2 px-4">
                ¥000000
              </td>
              <td className="border-r border-black text-center py-2 px-4">
                1
              </td>
              <td className="text-center py-2 px-4 text-blue-500 font-semibold">
                ¥000000
              </td>
            </tr>
            <tr className="border-y border-text_primary">
              {/* Description for September */}
              <td className="border-r border-black text-center py-2 px-4">
                September
              </td>
              <td className="border-r border-black text-center py-2 px-4">
                ¥000000
              </td>
              <td className="border-r border-black text-center py-2 px-4">
                1
              </td>
              <td className="text-center py-2 px-4 text-blue-500 font-semibold">
                ¥000000
              </td>
            </tr>
            {/* Subtotal, Tax, and Total rows */}
            <tr className="border-t border-text_primary">
              <td className="border-r border-black text-center py-2 px-4 font-semibold">
                Subtotal
              </td>
              <td colSpan={3} className="text-right py-2 px-4 font-semibold">
                ¥000000
              </td>
            </tr>
            <tr className="border-t border-text_primary">
              <td className="border-r border-black text-center py-2 px-4 font-semibold">
                Japanese Consumption Tax
              </td>
              <td colSpan={3} className="text-right py-2 px-4 font-semibold">
                ¥000000
              </td>
            </tr>
            <tr className="border-t border-text_primary">
              <td className="border-r border-black text-center py-2 px-4 font-semibold">
                Total
              </td>
              <td colSpan={3} className="text-right py-2 px-4 font-semibold">
                ¥000000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  