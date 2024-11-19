import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Table from "../../components/atoms/tables/Table";
import Text from "../../components/atoms/Text/Text";
import { EmployeeHeader } from "../../components/layouts/EmployeeHeader";
export default function EmployeeLeavePage() {
  const [year, setYear] = useState(2021);

  const headers = [
    "Id",
    "Application_Date",
    "Leave_Type",
    "Form",
    "To",
    "Status",
  ];
  const rows = [
    {
      Id: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      Form: "15/12/2024",
      To: "17/12/2024",
      Status: "Pending",
    },
    {
      Id: "10002",
      Application_Date: "11/12/2024",
      Leave_Type: "Sick",
      Form: "18/12/2024",
      To: "20/12/2024",
      Status: "Approved",
    },
    {
      Id: "10003",
      Application_Date: "12/12/2024",
      Leave_Type: "Annual",
      Form: "21/12/2024",
      To: "23/12/2024",
      Status: "Waiting",
    },
    {
      Id: "10004",
      Application_Date: "13/12/2024",
      Leave_Type: "Paternity/Maternity",
      Form: "24/12/2024",
      To: "26/12/2024",
      Status: "Denied",
    },
    {
      Id: "10005",
      Application_Date: "14/12/2024",
      Leave_Type: "Casual",
      Form: "27/12/2024",
      To: "29/12/2024",
      Status: "Pending",
    },
    {
      Id: "10006",
      Application_Date: "15/12/2024",
      Leave_Type: "Sick",
      Form: "30/12/2024",
      To: "02/01/2025",
      Status: "Approved",
    },
    {
      Id: "10007",
      Application_Date: "16/12/2024",
      Leave_Type: "Annual",
      Form: "03/01/2025",
      To: "05/01/2025",
      Status: "Waiting",
    },
    {
      Id: "10008",
      Application_Date: "17/12/2024",
      Leave_Type: "Paternity/Maternity",
      Form: "06/01/2025",
      To: "08/01/2025",
      Status: "Denied",
    },
    {
      Id: "10009",
      Application_Date: "18/12/2024",
      Leave_Type: "Casual",
      Form: "09/01/2025",
      To: "11/01/2025",
      Status: "Pending",
    },
    {
      Id: "10010",
      Application_Date: "19/12/2024",
      Leave_Type: "Sick",
      Form: "12/01/2025",
      To: "14/01/2025",
      Status: "Approved",
    },
    {
      Id: "10011",
      Application_Date: "20/12/2024",
      Leave_Type: "Annual",
      Form: "15/01/2025",
      To: "17/01/2025",
      Status: "Waiting",
    },
    {
      Id: "10012",
      Application_Date: "21/12/2024",
      Leave_Type: "Paternity/Maternity",
      Form: "18/01/2025",
      To: "20/01/2025",
      Status: "Denied",
    },
    {
      Id: "10013",
      Application_Date: "22/12/2024",
      Leave_Type: "Casual",
      Form: "21/01/2025",
      To: "23/01/2025",
      Status: "Pending",
    },
    {
      Id: "10014",
      Application_Date: "23/12/2024",
      Leave_Type: "Sick",
      Form: "24/01/2025",
      To: "26/01/2025",
      Status: "Approved",
    },
    {
      Id: "10015",
      Application_Date: "24/12/2024",
      Leave_Type: "Annual",
      Form: "27/01/2025",
      To: "29/01/2025",
      Status: "Waiting",
    },
  ];

  const dynamicColorValues = [
    {
      columnName: "Status",
      textColors: [
        {
          text: "Pending",
          color: "#835600",
        },
        {
          text: "Approved",
          color: "#046B53",
        },
        {
          text: "Denied",
          color: "#D20D0D",
        },
        {
          text: "Pending",
          color: "#835600",
        },

        {
          text: "Waiting",
          color: "#8200E9",
        },
      ],
    },
  ];

  const decrementYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  const incrementYear = () => {
    setYear((prevYear) => prevYear + 1);
  };
  return (
    <div>
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
        hasRightButton
        buttonText="Leave Application"
      />

      <div className="flex flex-col gap-[100px] bg-white mt-10 py-12 px-4">
        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-center items-center">
            <div className="h-[46px] w-[194px] border border-primary flex justify-between items-center px-[4px]">
              <MdKeyboardArrowLeft
                size={19}
                color="#0dbad2"
                className="cursor-pointer"
                onClick={decrementYear}
              />
              <Text
                text={year}
                className="text-[16px] font-semibold text-primary"
              />
              <MdKeyboardArrowRight
                size={19}
                color="#0dbad2"
                className="cursor-pointer"
                onClick={incrementYear}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[20px] justify-center items-center">
            <Text text="Leave History" className="text-[18px] font-semibold" />
            <div className="w-[300px] flex  justify-between">
              <div className="flex flex-col gap-[10px]">
                <Text
                  text="Type"
                  className="text-[16px] font-semibold mb-[10px]"
                />
                <Text
                  text="Casual"
                  className="text-[16px] font-semibold text-[#555454]"
                />
                <Text
                  text="Sick"
                  className="text-[16px] font-semibold text-[#555454]"
                />

                <Text
                  text="Annual"
                  className="text-[16px] font-semibold text-[#555454]"
                />

                <Text
                  text="paternity/Maternity"
                  className="text-[16px] font-semibold text-[#555454]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <Text
                  text="Amount"
                  className="text-[16px] font-semibold mb-[10px]"
                />
                <Text
                  text="15"
                  className="text-[16px] font-semibold text-[#555454] text-center"
                />
                <Text
                  text="10"
                  className="text-[16px] font-semibold text-[#555454] text-center"
                />
                <Text
                  text="08"
                  className="text-[16px] font-semibold text-[#555454] text-center"
                />
                <Text
                  text="30"
                  className="text-[16px] font-semibold text-[#555454] text-center "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Table
            headers={headers}
            rows={rows}
            dynamicColorValues={dynamicColorValues}
          />
        </div>
      </div>
    </div>
  );
}
