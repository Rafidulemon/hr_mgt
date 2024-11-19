import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Text from "../../components/atoms/Text/Text";
import { EmployeeHeader } from "../../components/layouts/EmployeeHeader";
export default function EmployeeLeavePage() {
  return (
    <div>
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
        hasRightButton
        buttonText="Leave Application"
      />

      <div className="flex-col justify-center items-center bg-white mt-10 py-12 px-4">
        <div className="flex justify-center items-center">
          <div className="h-[46px] w-[194px] border border-primary flex justify-between items-center px-[4px]">
            <MdKeyboardArrowLeft
              size={19}
              color="#0dbad2"
              className="cursor-pointer"
            />
            <Text
              text="2021"
              className="text-[16px] font-semibold text-primary"
            />
            <MdKeyboardArrowRight
              size={19}
              color="#0dbad2"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
