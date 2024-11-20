import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Table from "../../components/atoms/tables/Table";
import Text from "../../components/atoms/Text/Text";
import { months } from "../../utils/dateAndMonth";

export default function AttendanceHistory() {
  const date = new Date();
  const currentMonthIndex = date.getMonth();
  const [currentMonth, setCurrentMonth] = useState<number>(currentMonthIndex);

  const attendenceTableHeader = [
    "Date",
    "Day of the week",
    "Start Time",
    "End Time",
    "Start Time2",
    "End Time2",
    "Working Hours",
  ];

  const rows = [
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },

    {
      Date: "01/11",
      "Day of the week": "Friday",
      "Start Time": "08:30:00",
      "End Time": "12:30:00",
      "Start Time2": "13:30:00",
      "End Time2": "17:30:00",
      "Working Hours": "8:00",
    },
  ];

  const preMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Text text="Attendance History" className="font-semibold text-[30px]" />
        <div className="h-[46px] w-[250px] bg-primary rounded-md flex justify-between items-center px-[4px]">
          <MdKeyboardArrowLeft
            size={20}
            color="white"
            className="cursor-pointer"
            onClick={preMonth}
          />
          <Text
            text={months[currentMonth]}
            className="text-[16px] font-semibold text-white"
          />
          <MdKeyboardArrowRight
            size={20}
            color="white"
            className="cursor-pointer"
            onClick={nextMonth}
          />
        </div>
      </div>

      <div className="mt-[20px]">
        <Table
          headers={attendenceTableHeader}
          rows={rows}
          className="shadow-lg"
        />
      </div>

      <div className="flex justify-end items-center mt-8  md:w-[90%] lg:w-[87%]">
        <div className="flex  gap-[60px]">
          <Text
            text="Total Working Hour"
            className="text-[24px] font-semibold"
          />
          <Text
            text="160:00"
            className="text-[24px] font-semibold text-[#555454]"
          />
        </div>
      </div>
    </div>
  );
}
