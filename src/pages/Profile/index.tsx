import { EmployeeHeader } from "../../components/layouts/EmployeeHeader";
import { Card } from "../../components/atoms/frame/Card";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/buttons/Button";
import { useState } from "react";
import { EditProfile } from "./Edit";

function ProfilePage() {
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  const handleButtonClick = () => {
    setIsEditProfile(!isEditProfile);
  };
  return (
    <>
    {!isEditProfile ?(
      <div className="w-full flex flex-col gap-6">
        <EmployeeHeader
          name="Md. Rafidul Islam"
          designation="Software Engineer"
          joining_date="Aug 17, 2023"
          hasRightButton
          buttonText="Edit Profile"
          onButtonClick={handleButtonClick}
        />
        <Card isSquareBox title="Basic Info">
          <div className="w-full grid grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6 text-[16px] text-black font-semibold">
              <Text text="First Name" />
              <Text text="Last Name" />
              <Text text="Gender" />
              <Text text="Date of Birth" />
              <Text text="Nationality" />
            </div>

            <div className="col-span-2 flex flex-col gap-6 text-[16px] text-text_bold font-semibold">
              <Text text="Md. Rafidul" />
              <Text text="Islam" />
              <Text text="Male" />
              <Text text="01 January 1996" />
              <Text text="Bangladeshi" />
            </div>
          </div>
        </Card>

        <Card isSquareBox title="Contact Info">
          <div className="w-full grid grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6 text-[16px] text-black font-semibold">
              <Text text="Work Email" />
              <Text text="Work Phone" />
              <Text text="Personal Email" />
              <Text text="Personal Phone" />
              <Text text="Emergency Contact Person" />
              <Text text="Emergency Contact Number" />
            </div>

            <div className="col-span-2 flex flex-col gap-6 text-[16px] text-text_bold font-semibold">
              <Text text="example@gmail.com" />
              <Text text="+88011111111" />
              <Text text="example@gmail.com" />
              <Text text="+88011111111" />
              <Text text="Shahriar Duke" />
              <Text text="+88011111111" />
            </div>
          </div>
        </Card>

        <Card title="Address" isSquareBox>
          <div className="w-full grid grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6 text-[16px] text-black font-semibold">
              <Text text="Home Address" />
              <Text text="Current Address" />
            </div>

            <div className="col-span-2 flex flex-col gap-6 text-[16px] text-text_bold font-semibold">
              <Text text="Comilla, Chittagong, Bangladesh" />
              <Text text="Mohakhali, Dhaka, Bangladesh" />
            </div>
          </div>
        </Card>

        <Card title="Employee Info" isSquareBox>
          <div className="w-full grid grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6 text-[16px] text-black font-semibold">
              <Text text="Employee ID" />
              <Text text="Designation" />
              <Text text="Department" />
              <Text text="Joining Date" />
              <Text text="Employee Status" />
              <Text text="Reporting Manager" />
            </div>

            <div className="col-span-2 flex flex-col gap-6 text-[16px] text-text_bold font-semibold">
              <Text text="2023080021004" />
              <Text text="Software Engineer" />
              <Text text="Frontend" />
              <Text text="17 August, 2023" />
              <Text text="Permanent" />
              <Text text="Shahriar Duke" />
            </div>
          </div>
        </Card>

        <Card title="Bank Info" isSquareBox>
          <div className="w-full grid grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6 text-[16px] text-black font-semibold">
              <Text text="Bank Name" />
              <Text text="Account Holder Name" />
              <Text text="Account Number" />
              <Text text="Branch Name" />
              <Text text="IFSC Code/ SWIFT Code" />
              <Text text="TAX ID Number" />
            </div>

            <div className="col-span-2 flex flex-col gap-6 text-[16px] text-text_bold font-semibold">
              <Text text="Eastern Bank Ltd." />
              <Text text="Md. Rafidul Islam" />
              <Text text="123456789" />
              <Text text="Gulshan Avenue, Dhaka" />
              <Text text="12345" />
              <Text text="123451234512345" />
            </div>
          </div>
        </Card>
        <Button theme="primary">
          <Text text="Change Password" className="px-8" />
        </Button>
      </div>
    ) : (
      <EditProfile />
    )}
    </>
  );
}

export default ProfilePage;
