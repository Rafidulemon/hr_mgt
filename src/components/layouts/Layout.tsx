import { type ReactNode } from "react";
import LeftMenu from "../navigations/LeftMenu";
import Text from "../atoms/Text/Text";
import Button from "../atoms/buttons/Button";

interface LayoutProps {
  children: ReactNode;
  roleType?: "employee" | "sub_leader" | "leader" | "admin";
  hasNameTitle?: boolean;
  name?: string;
  designation?: string;
  joining_date?: string;
  hasRightButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

function Layout(props: LayoutProps) {
  const {
    children,
    roleType = "employee",
    hasNameTitle = false,
    name = "",
    designation = "",
    joining_date = "",
    hasRightButton = false,
    buttonText = "Click here",
    onButtonClick,
  } = props;
  console.log(roleType);
  return (
    <div className="min-h-screen max-w-screen bg-[#ECECEC] flex flex-row gap-1 grid grid-cols-6">
      <div className="col-span-1">
        <LeftMenu />
      </div>
      <div className="col-span-5 flex flex-col gap-0 p-10">
        {roleType === "employee" && hasNameTitle && (
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col gap-2 items-start">
              <Text text={name} className="text-[30px] text-black" isBold />
              <div className="w-full flex flex-row gap-2 text-[#555454] text-[16px] font-[500]">
                <Text text={designation} />
                <Text text="|" />
                <Text text={`Started on ${joining_date}`} />
              </div>
            </div>
            {hasRightButton && (
                <Button theme="primary" className="px-6 py-2" onClick={onButtonClick}>
                    <Text text={buttonText} className="font-semibold"/>
                </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Layout;
