import Text from "../../components/atoms/Text/Text";
import ImageInput from "../../components/atoms/inputs/ImageInput";
import { Card } from "../../components/atoms/frame/Card";
import TextInput from "../../components/atoms/inputs/TextInput";
import SelectBox from "../../components/atoms/selectBox/SelectBox";
import Button from "../../components/atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/atoms/frame/Modal";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import { useState } from "react";

function EditProfilePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true)
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  return (
    <div className="w-full flex flex-col gap-6">
      <Text
        text="Edit Profile"
        className="w-full text-center text-[40px] font-semibold"
      />
      <Card isSquareBox title="Basic Info" isTransparentBackground>
        <div className="w-full flex flex-col justify-center items-center gap-6">
        <ImageInput
          id="profilePic"
          onChange={(e) => console.log(e.target.files)}
        />
          <Text text="Change Photo" className="-mt-4 font-semibold" />
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="col-span-1 flex flex-col gap-6">
              <TextInput label="First Name" defaultValue="Md. Rafidul" />
              <SelectBox label="Gender" options={genderOptions} name="gender" />
              <TextInput label="Nationality" defaultValue="Bangladeshi" />
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <TextInput label="Last Name" defaultValue="Islam" />
              <TextInput label="Date of Birth" defaultValue="01 Jan, 1996" />
            </div>
          </div>
        </div>
      </Card>

      <Card isSquareBox title="Contact Info" isTransparentBackground>
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="col-span-1 flex flex-col gap-6">
            <TextInput label="Work Email" defaultValue="example@gmail.com" />
            <TextInput
              label="Personal Email"
              defaultValue="example@gmail.com"
            />
            <TextInput
              label="Emergency Contact Person"
              defaultValue="Md. Rafidul Islam"
            />
          </div>

          <div className="col-span-1 flex flex-col gap-6">
            <TextInput label="Work Phone" defaultValue="+8801546514561" />
            <TextInput label="Personal Phone" defaultValue="+8801546514561" />
            <TextInput
              label="Emergency Contact Number"
              defaultValue="+8801546514561"
            />
          </div>
        </div>
      </Card>

      <Card isSquareBox title="Address" isTransparentBackground>
          <div className="flex flex-col gap-6">
            <TextInput label="Home Address" defaultValue="Comilla, Chittagong, Bangladesh" />
            <TextInput label="Current Address" defaultValue="Comilla, Chittagong, Bangladesh" />
          </div>
      </Card>

      <Card isSquareBox title="Bank Info" isTransparentBackground>
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="col-span-1 flex flex-col gap-6">
            <TextInput label="Bank Name" defaultValue="Eastern Bank Ltd." />
            <TextInput
              label="Account Number"
              defaultValue="123456789"
            />
            <TextInput
              label="IFSC Code / Swift Code"
              defaultValue="12345"
            />
          </div>

          <div className="col-span-1 flex flex-col gap-6">
            <TextInput label="Account Holder Name" defaultValue="Md. Rafidul Islam" />
            <TextInput label="Branch Name" defaultValue="Gulshan Avenue, Dhaka" />
            <TextInput
              label="TAX ID Number"
              defaultValue="132456789714"
            />
          </div>
        </div>
      </Card>

      <div className="w-full flex flex-row gap-6 justify-center">
        <Button theme="primary" className="w-[185px]" onClick={handleButtonClick}>
            Save
        </Button>
        <Button theme="secondary" className="w-[185px]" onClick={() => {
          navigate("/profile")
        }}>
            Cancel
        </Button>
      </div>

      <Modal
        title="Save changes?"
        className="w-[40%]"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        isDoneButton
        doneButtonText="Confirm"
        isCancelButton
        cancelButtonText="Cancel"
        buttonWidth="120px"
        buttonHeight="40px"
        onDoneClick={()=>navigate("/profile")}
        closeOnClick={()=>setIsModalOpen(false)}
        crossOnClick={()=>setIsModalOpen(false)}
      >
        <PasswordInput label="Please enter password to save changes" />
      </Modal>
    </div>
  );
}

export default EditProfilePage;