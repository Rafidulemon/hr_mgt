import { useState } from "react";
import { BiChevronDown, BiChevronUp, BiLogOut } from "react-icons/bi";
import {
  FaBell,
  FaCalendarCheck,
  FaClipboardList,
  FaEdit,
  FaEye,
  FaFileInvoice,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport, TbReportAnalytics } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../atoms/frame/Modal";

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
      {
        label: "Leave History",
        icon: <HiOutlineDocumentText />,
        href: "/leave",
      },
      {
        label: "Leave Application",
        icon: <IoIosPaper />,
        href: "/leave/application",
      },
    ],
  },

  {
    label: "Daily Report",
    icon: <TbReport />,
    href: "/daily/report",
    subItems: [
      {
        label: "Daily Report",
        icon: <HiOutlineDocumentText />,
        href: "/daily/report",
      },
      {
        label: "Daily Report History",
        icon: <IoIosPaper />,
        href: "/daily/report-history",
      },
    ],
  },

  {
    label: "Monthly Report",
    icon: <TbReportAnalytics />,
    href: "/monthly/report",
    subItems: [
      {
        label: "Monthly Report",
        icon: <HiOutlineDocumentText />,
        href: "/monthly/report",
      },
      {
        label: "Monthly Report History",
        icon: <IoIosPaper />,
        href: "/monthly/report-history",
      },
    ],
  },
  { label: "Notification", icon: <FaBell />, href: "/notification" },
  { label: "Invoice", icon: <FaFileInvoice />, href: "/invoice" },
];

const LeftMenu = ({ isLeader = false }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(
    currentPath.startsWith("/profile")
  );
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(
    currentPath.startsWith("/leave")
  );

  const [isDailyReportDropdownOpen, setIsDailyReportDropdownOpen] = useState(
    currentPath.startsWith("/daily/report")
  );

  const [isMonthlyReportDropdownOpen, setIsMonthlyReportDropdownOpen] =
    useState(currentPath.startsWith("/monthly/report"));
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen((prev) => !prev);
  };

  const toggleDailyReportDropDownOpen = () => {
    setIsDailyReportDropdownOpen((prev) => !prev);
  };

  const toggleMonthlyReportDropDownOpen = () => {
    setIsMonthlyReportDropdownOpen((prev) => !prev);
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
                          <HiOutlineDocumentText />
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
              ) : item.label === "Notification" ? (
                <a
                  href={item.href}
                  className={`flex items-center gap-4 p-2 rounded-md transition-colors 
                  ${
                    currentPath.startsWith("/notification")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:shadow-lg hover:bg-primary hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="text-[16px] font-semibold">
                    {item.label}
                  </span>
                </a>
              ) : item.label === "Invoice" ? (
                <a
                  href={item.href}
                  className={`flex items-center gap-4 p-2 rounded-md transition-colors 
                  ${
                    currentPath.startsWith("/invoice")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:shadow-lg hover:bg-primary hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="text-[16px] font-semibold">
                    {item.label}
                  </span>
                </a>
              ) : item.label === "Daily Report" ? (
                <div>
                  <button
                    onClick={toggleDailyReportDropDownOpen}
                    className={`flex items-center gap-4 p-2 rounded-md transition-colors w-full 
                    ${
                      currentPath.startsWith("/daily/report")
                        ? "bg-primary text-white shadow-lg"
                        : "hover:shadow-lg hover:bg-primary hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="text-[16px] font-semibold">
                      {item.label}
                    </span>
                    {isDailyReportDropdownOpen ? (
                      <BiChevronUp className="ml-auto" />
                    ) : (
                      <BiChevronDown className="ml-auto" />
                    )}
                  </button>

                  {isDailyReportDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-8">
                      <li>
                        <a
                          href="/daily/report-history"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                          ${
                            currentPath === "/daily/report-history"
                              ? "text-primary"
                              : "hover:bg-primary hover:text-white"
                          }`}
                        >
                          <HiOutlineDocumentText />
                          <span className="text-[14px] font-medium">
                            History
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/daily/report"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                          ${
                            currentPath === "/daily/report"
                              ? "text-primary"
                              : "hover:bg-primary hover:text-white"
                          }`}
                        >
                          <IoIosPaper />
                          <span className="text-[14px] font-medium">
                            Report
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : item.label === "Monthly Report" ? (
                <div>
                  <button
                    onClick={toggleMonthlyReportDropDownOpen}
                    className={`flex items-center gap-4 p-2 rounded-md transition-colors w-full 
                    ${
                      currentPath.startsWith("/monthly/report")
                        ? "bg-primary text-white shadow-lg"
                        : "hover:shadow-lg hover:bg-primary hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="text-[16px] font-semibold">
                      {item.label}
                    </span>
                    {isMonthlyReportDropdownOpen ? (
                      <BiChevronUp className="ml-auto" />
                    ) : (
                      <BiChevronDown className="ml-auto" />
                    )}
                  </button>

                  {isMonthlyReportDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-8">
                      <li>
                        <a
                          href="/monthly/report-history"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                          ${
                            currentPath === "/monthly/report-history"
                              ? "text-primary"
                              : "hover:bg-primary hover:text-white"
                          }`}
                        >
                          <HiOutlineDocumentText />
                          <span className="text-[14px] font-medium">
                            History
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/monthly/report"
                          className={`flex items-center gap-2 p-2 rounded-md transition-colors 
                          ${
                            currentPath === "/monthly/report"
                              ? "text-primary"
                              : "hover:bg-primary hover:text-white"
                          }`}
                        >
                          <IoIosPaper />
                          <span className="text-[14px] font-medium">
                            Report
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
                  <span className="text-[16px] font-semibold">
                    {item.label}
                  </span>
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
        <div
          onClick={() => setIsOpenModal(true)}
          className="w-full bg-primary flex items-center text-white gap-4 rounded-lg shadow-lg p-2 justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <BiLogOut />
          <span className="text-[16px] font-semibold">Logout</span>
        </div>
      </div>

      <Modal
        doneButtonText="Log Out"
        cancelButtonText="Cancel"
        isCancelButton
        className="h-auto w-[496px]"
        open={isOpenModal}
        setOpen={setIsOpenModal}
        title="Log Out ?"
        buttonWidth="120px"
        buttonHeight="40px"
        onDoneClick={() => navigate("/auth/login")}
        closeOnClick={() => setIsOpenModal(false)}
      >
        <div>Are you sure you would like to log out?</div>
      </Modal>
    </div>
  );
};

export default LeftMenu;
