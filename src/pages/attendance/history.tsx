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
    "Day_of_the_Weak",
    "Start_Time",
    "End_Time",
    "Start_Time2",
    "End_Time2",
    "Working_Hours",
  ];

  const rows = [
    {
      Date: "01/11",
      Day_of_the_Weak: "Friday",
      Start_Time: "08:30:00",
      End_Time: "12:30:00",
      Start_Time2: "13:30:00",
      End_Time2: "17:30:00",
      Working_Hours: "8:00",
    },
    {
      Date: "02/11",
      Day_of_the_Weak: "Saturday",
      Start_Time: "09:00:00",
      End_Time: "12:45:00",
      Start_Time2: "14:00:00",
      End_Time2: "17:00:00",
      Working_Hours: "7:45",
    },
    {
      Date: "03/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "04/11",
      Day_of_the_Weak: "Monday",
      Start_Time: "08:00:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "17:00:00",
      Working_Hours: "8:00",
    },
    {
      Date: "05/11",
      Day_of_the_Weak: "Tuesday",
      Start_Time: "08:20:00",
      End_Time: "12:10:00",
      Start_Time2: "13:10:00",
      End_Time2: "17:10:00",
      Working_Hours: "8:10",
    },
    {
      Date: "06/11",
      Day_of_the_Weak: "Wednesday",
      Start_Time: "08:10:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:55:00",
      Working_Hours: "7:45",
    },
    {
      Date: "07/11",
      Day_of_the_Weak: "Thursday",
      Start_Time: "08:30:00",
      End_Time: "12:30:00",
      Start_Time2: "13:30:00",
      End_Time2: "17:30:00",
      Working_Hours: "8:00",
    },
    {
      Date: "08/11",
      Day_of_the_Weak: "Friday",
      Start_Time: "08:15:00",
      End_Time: "12:15:00",
      Start_Time2: "13:15:00",
      End_Time2: "16:45:00",
      Working_Hours: "8:00",
    },
    {
      Date: "09/11",
      Day_of_the_Weak: "Saturday",
      Start_Time: "09:00:00",
      End_Time: "12:45:00",
      Start_Time2: "14:00:00",
      End_Time2: "17:00:00",
      Working_Hours: "7:45",
    },
    {
      Date: "10/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "11/11",
      Day_of_the_Weak: "Monday",
      Start_Time: "08:00:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "17:00:00",
      Working_Hours: "8:00",
    },
    {
      Date: "12/11",
      Day_of_the_Weak: "Tuesday",
      Start_Time: "08:20:00",
      End_Time: "12:10:00",
      Start_Time2: "13:10:00",
      End_Time2: "17:10:00",
      Working_Hours: "8:10",
    },
    {
      Date: "13/11",
      Day_of_the_Weak: "Wednesday",
      Start_Time: "08:10:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:55:00",
      Working_Hours: "7:45",
    },
    {
      Date: "14/11",
      Day_of_the_Weak: "Thursday",
      Start_Time: "08:30:00",
      End_Time: "12:30:00",
      Start_Time2: "13:30:00",
      End_Time2: "17:30:00",
      Working_Hours: "8:00",
    },
    {
      Date: "15/11",
      Day_of_the_Weak: "Friday",
      Start_Time: "08:15:00",
      End_Time: "12:15:00",
      Start_Time2: "13:15:00",
      End_Time2: "16:45:00",
      Working_Hours: "8:00",
    },
    {
      Date: "16/11",
      Day_of_the_Weak: "Saturday",
      Start_Time: "09:00:00",
      End_Time: "12:45:00",
      Start_Time2: "14:00:00",
      End_Time2: "17:00:00",
      Working_Hours: "7:45",
    },
    {
      Date: "17/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "18/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "19/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "20/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "21/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "22/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "23/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "24/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "25/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "26/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "27/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },
    {
      Date: "28/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "29/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
    },

    {
      Date: "30/11",
      Day_of_the_Weak: "Sunday",
      Start_Time: "08:15:00",
      End_Time: "12:00:00",
      Start_Time2: "13:00:00",
      End_Time2: "16:45:00",
      Working_Hours: "7:30",
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
