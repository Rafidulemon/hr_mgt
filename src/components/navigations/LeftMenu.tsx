import { useLocation } from "react-router-dom";
import {
  FaUser,
  FaCalendarCheck,
  FaClipboardList,
  FaBell,
  FaFileInvoice,
  FaChartLine,
  FaUsers,
  FaEye,
  FaEdit,
} from "react-icons/fa";
import { BiLogOut, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport, TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";

type Props = {
  isLeader?: boolean;
  isAdmin?: boolean;
};

const menuItems = [
  { label: "Dashboard", icon: <MdOutlineDashboard />, href: "/dashboard" },
  { label: "Profile", icon: <FaUser />, href: "/profile" },
  { label: "Attendance", icon: <FaCalendarCheck />, href: "/attendance" },
  {
    label: "Leave",
    icon: <FaClipboardList />,
    href: "/leave",
    subItems: [
      { label: "Leave History", icon: <HiOutlineDocumentText />, href: "/leave" },
      { label: "Leave Application", icon: <IoIosPaper />, href: "/leave/application" },
    ],
  },
  { label: "Daily Report", icon: <TbReport />, href: "/report/daily" },
  {
    label: "Monthly Report",
    icon: <TbReportAnalytics />,
    href: "/report/monthly",
  },
  { label: "Notification", icon: <FaBell />, href: "/notification" },
  { label: "Payroll", icon: <FaFileInvoice />, href: "/payroll" },
  {
    label: "Monthly Project Report",
    icon: <FaChartLine />,
    href: "/monthly-project-report",
  },
];

const LeftMenu = ({ isLeader = false }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(
    currentPath.startsWith("/profile")
  );
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(
    currentPath.startsWith("/leave")
  );

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full min-h-full bg-[#F2F6F9] shadow-[10px_0_20px_rgba(0,0,0,0.2)] text-black flex flex-col items-center">
      <div className="w-[60%]">
        <img
          src="/demo_logo.png"
          className="cursor-pointer w-full mt-6"
          alt="Logo"
        />
      </div>

      <div className="my-4 w-full flex flex-row justify-center">
        <div className="relative w-[40%] h-auto rounded-full overflow-hidden border border-black cursor-pointer">
          <img
            src="/dp.png"
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <nav className="flex flex-col p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              {item.label === "Profile" ? (
                <div>
                  <button
                    onClick={toggleProfileDropdown}
                    className={`flex items-center gap-4 p-2 rounded-md transition-colors w-full 
                      ${
                        currentPath.startsWith("/profile")
                          ? "bg-primary text-white shadow-lg"
                          : "hover:shadow-lg hover:bg-primary hover:text-white"
                      }`}
                  >
                    {item.icon}
                    <span className="text-[16px] font-semibold">
                      {item.label}
                    </span>
                    {isProfileDropdownOpen ? (
                      <BiChevronUp className="ml-auto" />
                    ) : (
                      <BiChevronDown className="ml-auto" />
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-8">
                      <li>
                        <a
                          href="/profile"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                            ${
                              currentPath === "/profile"
                                ? "text-primary"
                                : "hover:bg-primary hover:text-white"
                            }`}
                        >
                          <FaEye />
                          <span className="text-[14px] font-medium">
                            View Profile
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile/edit"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                            ${
                              currentPath === "/profile/edit"
                                ? "text-primary"
                                : "hover:bg-primary hover:text-white"
                            }`}
                        >
                          <FaEdit />
                          <span className="text-[14px] font-medium">
                            Edit Profile
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : item.label === "Leave" ? (
                <div>
                  <button
                    onClick={toggleLeaveDropdown}
                    className={`flex items-center gap-4 p-2 rounded-md transition-colors w-full 
                      ${
                        currentPath.startsWith("/leave")
                          ? "bg-primary text-white shadow-lg"
                          : "hover:shadow-lg hover:bg-primary hover:text-white"
                      }`}
                  >
                    {item.icon}
                    <span className="text-[16px] font-semibold">
                      {item.label}
                    </span>
                    {isLeaveDropdownOpen ? (
                      <BiChevronUp className="ml-auto" />
                    ) : (
                      <BiChevronDown className="ml-auto" />
                    )}
                  </button>

                  {isLeaveDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-8">
                      <li>
                        <a
                          href="/leave"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                            ${
                              currentPath === "/leave"
                                ? "text-primary"
                                : "hover:bg-primary hover:text-white"
                            }`}
                        >
                          <HiOutlineDocumentText/>
                          <span className="text-[14px] font-medium">
                            History
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/leave/application"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                            ${
                              currentPath === "/leave/application"
                                ? "text-primary"
                                : "hover:bg-primary hover:text-white"
                            }`}
                        >
                          <IoIosPaper />
                          <span className="text-[14px] font-medium">
                            Application
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center gap-4 p-2 rounded-md transition-colors 
                    ${
                      currentPath === item.href ||
                      (item.href === "/dashboard" && currentPath === "/")
                        ? "bg-primary text-white shadow-lg"
                        : "hover:shadow-lg hover:bg-primary hover:text-white"
                    }`}
                >
                  {item.icon}
                  <span className="text-[16px] font-semibold">{item.label}</span>
                </a>
              )}
            </li>
          ))}
          {isLeader && (
            <li>
              <a
                href="/my-team"
                className={`flex items-center gap-4 p-2 rounded-md transition-colors 
                  ${
                    currentPath === "/my-team"
                      ? "bg-primary text-white shadow-lg"
                      : "hover:shadow-lg hover:bg-primary hover:text-white"
                  }`}
              >
                <FaUsers />
                <span className="text-[16px] font-semibold">My Team</span>
              </a>
            </li>
          )}
        </ul>
      </nav>

      <div className="flex-1 my-6 p-4 w-full">
        <div className="w-full bg-primary flex items-center text-white gap-4 rounded-lg shadow-lg p-2 justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
          <BiLogOut />
          <span className="text-[16px] font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
