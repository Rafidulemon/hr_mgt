import { useState } from "react";
import Text from "../atoms/Text/Text";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const holidays = [5, 25];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate.getMonth(), year);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <div className="mx-auto p-4 bg-white shadow-lg rounded-lg border">
      <div className="w-full gap-6 grid grid-cols-3">
        <div className="h-full justify-between items-center col-span-2 flex flex-row gap-2">
          <GrFormPrevious
            className="cursor-pointer hover:text-primary"
            onClick={handlePreviousMonth}
          />
          <Text text={`${monthName} ${year}`} isBold />
          <GrFormNext
            className="cursor-pointer hover:text-primary"
            onClick={handleNextMonth}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="w-full flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-primary mt-1" />
            <Text text="Weekend" />
          </div>
          <div className="w-full flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-[#0033E9] mt-1" />
            <Text text="Holiday" />
          </div>
        </div>
      </div>


      <div className="grid grid-cols-7 text-center mt-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="p-2 font-semibold"
            style={{
              color: day === "Sat" || day === "Sun" ? "#E53E3E" : "#555454",
            }}
          >
            {day}
          </div>
        ))}

        {[...Array(startDay)].map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {[...Array(daysInMonth)].map((_, day) => {
          const dayOfMonth = day + 1;
          const date = new Date(year, currentDate.getMonth(), dayOfMonth);
          const isWeekend = date.getDay() === 6 || date.getDay() === 0;
          const isHoliday = holidays.includes(dayOfMonth);

          return (
            <div
              key={dayOfMonth}
              className="p-2 flex justify-center items-center"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  isHoliday
                    ? "bg-[#0033E9] text-white"
                    : isWeekend
                    ? "bg-primary text-white"
                    : "text-[#555454]"
                }`}
              >
                {dayOfMonth}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
