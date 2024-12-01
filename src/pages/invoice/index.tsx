import { ReactElement, useState } from "react";
import { EmployeeHeader } from "../../components/layouts/EmployeeHeader";
import Table from "../../components/atoms/tables/Table";
import Pagination from "../../components/pagination/Pagination";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const invoiceTableHeader = ["Month", "Year", "Status", "Action"];

interface Row {
  Month: string;
  Year: string;
  Status: string;
  Action: ReactElement;
  [key: string]: string | ReactElement;
}

const rows: Row[] = [
  {
    Month: "January",
    Year: "2023",
    Status: "Pending",
    Action: <IoEye />,
  },
  {
    Month: "February",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "March",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "April",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "May",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "June",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "July",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "August",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "September",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "October",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "November",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "December",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "June",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "July",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "August",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "September",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "October",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "November",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
  {
    Month: "December",
    Year: "2023",
    Status: "Sent",
    Action: <IoEye />,
  },
];

function InvoicePage() {
  const [currentPageData, setCurrentPageData] = useState<Row[]>();
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-10">
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
      />

      <div className="w-full  bg-white shadow py-8 flex flex-col gap-6">
        {currentPageData && (
          <Table
            headers={invoiceTableHeader}
            rows={currentPageData}
            onRowClick={() => navigate("/invoice/details")}
          />
        )}
        <div>
          <Pagination
            data={rows}
            postsPerPage={15}
            setCurrentPageData={setCurrentPageData}
          />
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
