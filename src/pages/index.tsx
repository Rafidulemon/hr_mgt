import Text from "../components/atoms/Text/Text";
import { CardWithHeader } from "../components/atoms/frame/CardWithHeader";

function Index() {
  return (
    <div className="pt-2">
      <div className="grid md:grid-cols-11 xl:grid-cols-5 gap-6">
        <div className="md:col-span-3 xl:col-span-1 w-full flex flex-col gap-4">
          <div className="w-full border border-[#7E7D7D]">
            <img src="/dp.png" className="w-full h-full" />
          </div>
          <div className="w-full flex flex-col items-center">
            <Text
              text="Md. Rafidul Islam"
              className="text-[24px] font-semibold text-black"
            />
            <Text
              text="Software Engineer"
              className="text-[16px] font-semibold text-text_primary"
            />
          </div>
          <div className="w-full h-[40px] flex flex-col justify-center items-center bg-primary text-white text-[16px]">
            <div className="w-fit flex flex-row gap-1">
              <Text text="Joining Date: " isBold />
              <Text text="17 August, 2023" />
            </div>
          </div>
          <hr className="w-full border-text_primary" />
          <div className="w-full h-[93px] flex flex-col justify-center items-center bg-primary text-white text-[16px] gap-2">
            <Text text="November, 2024" className="italic" isBold />
            <div className="w-full flex flex-row gap-1 justify-between px-4">
              <div className="flex flex-col items-center">
                <Text text="18" isBold />
                <Text text="Days" />
              </div>
              <div className="flex flex-col items-center">
                <Text text="144" isBold />
                <Text text="Hours" />
              </div>
              <div className="flex flex-col items-center">
                <Text text="01" isBold />
                <Text text="Leaves" />
              </div>
            </div>
          </div>
          <CardWithHeader
            isSquareBox
            isItalicHeader
            title="Upcoming Holidays"
            titleBarSize="h-[40px]"
            titleColor="bg-primary"
          >
            <div className="w-full p-2 flex flex-col gap-4">
              <div className="w-full bg-[#EFEFEF] p-2 flex flex-row gap-4 text-[12px] justify-between">
                <Text text="23 Nov, 2024" className="text-black" />
                <Text
                  text="Labor Thanksgiving Day"
                  className="text-text_primary"
                />
              </div>
              <div className="w-full bg-[#EFEFEF] p-2 flex flex-row gap-4 text-[12px] justify-between">
                <Text text="23 Nov, 2024" className="text-black" />
                <Text
                  text="Labor Thanksgiving Day"
                  className="text-text_primary"
                />
              </div>
              <div className="w-full bg-[#EFEFEF] p-2 flex flex-row gap-4 text-[12px] justify-between">
                <Text text="23 Nov, 2024" className="text-black" />
                <Text
                  text="Labor Thanksgiving Day"
                  className="text-text_primary"
                />
              </div>
              <div className="w-full bg-[#EFEFEF] p-2 flex flex-row gap-4 text-[12px] justify-between">
                <Text text="23 Nov, 2024" className="text-black" />
                <Text
                  text="Labor Thanksgiving Day"
                  className="text-text_primary"
                />
              </div>
              <div className="w-full bg-[#EFEFEF] p-2 flex flex-row gap-4 text-[12px] justify-between">
                <Text text="23 Nov, 2024" className="text-black" />
                <Text
                  text="Labor Thanksgiving Day"
                  className="text-text_primary"
                />
              </div>
            </div>
          </CardWithHeader>
        </div>
        <div className="md:col-span-4 xl:col-span-2 w-full flex flex-col justify-between gap-8">
          <CardWithHeader
            isSquareBox
            isItalicHeader
            title="Personal Details"
            titleBarSize="h-[40px]"
            titleColor="bg-primary"
          >
            <div className="w-full flex flex-col gap-0 pt-2 pb-4 min-h-[350px]">
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Name" />
                <Text text="Md. Rafidul Islam" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Designation" />
                <Text text="Software Engineer" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Date of Birth" />
                <Text text="12-Nov-1996" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Gender" />
                <Text text="Male" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Email" />
                <Text text="example@gmail.com" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Phone" />
                <Text text="+88011111111" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Local Address" />
                <Text text="Dhaka, Bangladesh" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Permanent Address" />
                <Text text="Dhaka, Bangladesh" />
              </div>
            </div>
          </CardWithHeader>
          <hr className="w-full border-text_primary" />
          <CardWithHeader
            isSquareBox
            isItalicHeader
            title="Company Details"
            titleBarSize="h-[40px]"
            titleColor="bg-primary"
          >
            <div className="w-full flex flex-col gap-0 pt-2 pb-4 min-h-[350px]">
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Employee ID" />
                <Text text="1324654984" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Designation" />
                <Text text="Software Engineer" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Department" />
                <Text text="Frontend" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Joining Date" />
                <Text text="17-Aug-2023" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Work Type" />
                <Text text="Remote" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Employment Type" />
                <Text text="Permanent" />
              </div>
              <hr className="w-full border-[#B4B4B4]" />
              <div className="px-4 py-2 w-full grid grid-cols-2 text-[14px] text-text_bold">
                <Text text="Email" />
                <Text text="example@gmail.com" />
              </div>
            </div>
          </CardWithHeader>
        </div>
        <div className="md:col-span-4 xl:col-span-2 w-full flex flex-col justify-between gap-8">
          <CardWithHeader
            isSquareBox
            isItalicHeader
            title="Notice"
            titleBarSize="h-[40px]"
            titleColor="bg-primary"
          >
            <div className="w-full flex flex-col gap-0 items-center justify-center min-h-[350px]">
              <Text
                text="No Notice"
                className="italic text-[16px] text-black font-[500]"
              />
            </div>
          </CardWithHeader>
          <hr className="w-full border-text_primary" />
          <CardWithHeader
            isSquareBox
            isItalicHeader
            title="Notifications"
            titleBarSize="h-[40px]"
            titleColor="bg-primary"
          >
            <div className="w-full flex flex-col gap-4 p-4 min-h-[350px] text-[#3C3C3C] text-[14px]">
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
              <Text
                className="w-full bg-[#D9D9D9] p-2 flex flex-row gap-4 justify-between"
                text="System Maintenance on going..."
              />
            </div>
          </CardWithHeader>
        </div>
      </div>
    </div>
  );
}

export default Index;
