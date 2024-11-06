import {
  FaUser,
  FaCalendarCheck,
  FaClipboardList,
  FaBell,
  FaFileInvoice,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport, TbReportAnalytics  } from "react-icons/tb";

type Props = {
  isLeader?: boolean;
  isAdmin?: boolean;
};

const menuItems = [
  { label: "Dashboard", icon: <MdOutlineDashboard />, href: "/dashboard" },
  { label: "Profile", icon: <FaUser />, href: "/profile" },
  { label: "Attendance", icon: <FaCalendarCheck />, href: "/attendance" },
  { label: "Leave", icon: <FaClipboardList />, href: "/leave" },
  { label: "Daily Report", icon: <TbReport />, href: "/daily-report" },
  { label: "Monthly Report", icon: <TbReportAnalytics />, href: "/monthly-report" },
  { label: "Notification", icon: <FaBell />, href: "/notification" },
  { label: "Payroll", icon: <FaFileInvoice />, href: "/payroll" },
  {
    label: "Monthly Project Report",
    icon: <FaChartLine />,
    href: "/monthly-project-report",
  },
];

const LeftMenu = ({ isLeader = false }: Props) => {
  return (
    <div className="min-h-screen bg-[#F2F6F9] shadow-[10px_0_20px_rgba(0,0,0,0.2)] text-black flex flex-col items-center">
      <img
        src="demo_logo.png"
        className="cursor-pointer w-[200px] h-[48px] mt-10"
        alt="Logo"
      />

      <div className="my-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-black">
          <img
            src="dp.png"
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-4 p-2 rounded-md hover:shadow-lg hover:bg-primary hover:text-white transition-colors"
              >
                {item.icon}
                <span className="text-[16px] font-semibold">{item.label}</span>
              </a>
            </li>
          ))}
          {isLeader && (
            <li>
              <a
                href="/my-team"
                className="flex items-center gap-4 p-2 rounded-md hover:shadow-lg hover:bg-primary hover:text-white transition-colors"
              >
                <FaUsers />
                <span className="text-[16px] font-semibold">My Team</span>
              </a>
            </li>
          )}
        </ul>
      </nav>

      <div className="flex-1 my-6 p-4 w-full">
        <div className="w-full bg-primary flex items-center text-white gap-4 rounded-lg shadow-lg p-2 justify-center cursor-pointer hover:scale-105">
          <BiLogOut />
          <span className="text-[16px] font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
