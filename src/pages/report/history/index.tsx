import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Table from "../../../components/atoms/tables/Table";
import Text from "../../../components/atoms/Text/Text";
import Pagination from "../../../components/pagination/Pagination";
import { months } from "../../../utils/dateAndMonth";
const attendenceTableHeader = [
  "Date",
  "Type",
  "Project Name",
  "Others",
  "Details",
  "Working Hours",
];

interface Row {
  Date: string;
  Type: string;
  "Project Name": string;
  Others: string;
  Details: string;
  "Working Hours": string;

  [key: string]: string | number;
}

const rows: Row[] = [
  {
    Date: "01/11",
    Type: "Office",
    "Project Name": "Project Alpha",
    Others: " ",
    Details: "Team meeting and updates",
    "Working Hours": "8:00",
  },
  {
    Date: "02/11",
    Type: "Remote",
    "Project Name": "Project Beta",
    Others: " ",
    Details: "Completed module testing",
    "Working Hours": "7:30",
  },
  {
    Date: "03/11",
    Type: "Office",
    "Project Name": "Project Gamma",
    Others: "Client Interaction",
    Details: "Presented project updates to the client",
    "Working Hours": "8:00",
  },
  {
    Date: "04/11",
    Type: "Office",
    "Project Name": "Project Delta",
    Others: "  ",
    Details: "Sprint planning session",
    "Working Hours": "8:15",
  },
  {
    Date: "05/11",
    Type: "Remote",
    "Project Name": "Project Epsilon",
    Others: "  ",
    Details: "Code review and debugging",
    "Working Hours": "7:45",
  },
  {
    Date: "06/11",
    Type: "Office",
    "Project Name": "Project Zeta",
    Others: "  ",
    Details: "Developed new features",
    "Working Hours": "8:30",
  },
  {
    Date: "07/11",
    Type: "Office",
    "Project Name": "Project Eta",
    Others: "Team Lunch",
    Details: "Collaborative team work",
    "Working Hours": "8:00",
  },
  {
    Date: "08/11",
    Type: "Remote",
    "Project Name": "Project Theta",
    Others: "  ",
    Details: "Prepared documentation",
    "Working Hours": "7:00",
  },
  {
    Date: "09/11",
    Type: "Office",
    "Project Name": "Project Iota",
    Others: "Training",
    Details: "Attended technical training",
    "Working Hours": "6:00",
  },
  {
    Date: "10/11",
    Type: "Office",
    "Project Name": "Project Kappa",
    Others: "  ",
    Details: "Bug fixing",
    "Working Hours": "8:20",
  },
  {
    Date: "11/11",
    Type: "Remote",
    "Project Name": "Project Lambda",
    Others: "Client Feedback",
    Details: "Implemented feedback changes",
    "Working Hours": "7:50",
  },
  {
    Date: "12/11",
    Type: "Office",
    "Project Name": "Project Mu",
    Others: "  ",
    Details: "Team brainstorming session",
    "Working Hours": "8:10",
  },
  {
    Date: "13/11",
    Type: "Office",
    "Project Name": "Project Nu",
    Others: "  ",
    Details: "Worked on backend API integration",
    "Working Hours": "8:00",
  },
  {
    Date: "14/11",
    Type: "Remote",
    "Project Name": "Project Xi",
    Others: "  ",
    Details: "Prepared project presentation",
    "Working Hours": "7:15",
  },
  {
    Date: "15/11",
    Type: "Office",
    "Project Name": "Project Omicron",
    Others: "Client Meeting",
    Details: "Discussed project scope",
    "Working Hours": "8:25",
  },
  {
    Date: "16/11",
    Type: "Remote",
    "Project Name": "Project Pi",
    Others: "  ",
    Details: "Unit testing",
    "Working Hours": "7:40",
  },
  {
    Date: "17/11",
    Type: "Office",
    "Project Name": "Project Rho",
    Others: "  ",
    Details: "UI enhancements",
    "Working Hours": "8:00",
  },
  {
    Date: "18/11",
    Type: "Office",
    "Project Name": "Project Sigma",
    Others: "  ",
    Details: "Deployed new version",
    "Working Hours": "8:00",
  },
  {
    Date: "19/11",
    Type: "Remote",
    "Project Name": "Project Tau",
    Others: "  ",
    Details: "Team retrospective",
    "Working Hours": "7:30",
  },
  {
    Date: "20/11",
    Type: "Office",
    "Project Name": "Project Upsilon",
    Others: "  ",
    Details: "Collaborative coding session",
    "Working Hours": "8:00",
  },
  {
    Date: "21/11",
    Type: "Office",
    "Project Name": "Project Phi",
    Others: "  ",
    Details: "Conducted code review",
    "Working Hours": "8:10",
  },
  {
    Date: "22/11",
    Type: "Remote",
    "Project Name": "Project Chi",
    Others: " ",
    Details: "Worked on bug fixes",
    "Working Hours": "7:45",
  },
  {
    Date: "23/11",
    Type: "Office",
    "Project Name": "Project Psi",
    Others: " ",
    Details: "Prepared for client demo",
    "Working Hours": "8:20",
  },
  {
    Date: "24/11",
    Type: "Office",
    "Project Name": "Project Omega",
    Others: "Client Presentation",
    Details: "Delivered project demo",
    "Working Hours": "8:00",
  },
];

export default function DailyReportHistoryPage() {
  const date = new Date();
  const currentMonthIndex = date.getMonth();
  const [currentMonth, setCurrentMonth] = useState<number>(currentMonthIndex);
  const [currentPageData, setCurrentPageData] = useState<Row[]>();

  const preMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Text
          text="Daily Report History"
          className="font-semibold text-[30px]"
        />
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
        {currentPageData && (
          <Table
            headers={attendenceTableHeader}
            rows={currentPageData}
            className="shadow-lg py-6"
            isTextCenter
          />
        )}
      </div>

      <div>
        <Pagination
          data={rows}
          postsPerPage={15}
          setCurrentPageData={setCurrentPageData}
        />
      </div>
    </div>
  );
}
