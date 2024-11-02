import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";
import TextInput from "../../components/atoms/inputs/TextInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import { type FieldError } from "react-hook-form";
import TextArea from "../../components/atoms/inputs/TextArea";
import { useState } from "react";
import { Modal } from "../../components/atoms/frame/Modal";

const mockError: FieldError = {
  type: "required",
  message: "This field is required",
};

const mockPasswordError: FieldError = {
  type: "required",
  message: "Password incorrect",
};

function Atoms() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen p-10 bg-[#ECECEC]">
      <div className="flex flex-row w-full justify-center items-center text-[30px] font-extrabold">
        <h1 className="text-center">Components</h1>
      </div>
      <Card className="p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">TextInput</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <TextInput
          label="TextInput"
          placeholder="Enter text"
          className="col-span-2 w-[500px]"
        />
        <TextInput
          isRequired
          label="Required TextInput"
          placeholder="Enter text"
          className="col-span-2 w-[500px]"
        />
        <TextInput
          isRequired
          label="TextInput Error"
          placeholder="Enter text"
          className="w-[500px]"
          error={mockError}
        />
      </Card>

      <Card className="p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">PasswordInput</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <PasswordInput
          label="PasswordInput"
          placeholder="Enter Password"
          className="col-span-2 w-[500px]"
        />
        <PasswordInput
          isRequired
          label="Required PasswordInput"
          placeholder="Enter Password"
          className="col-span-2 w-[500px]"
        />
        <PasswordInput
          isRequired
          label="PasswordInput Error"
          className="w-[500px]"
          error={mockPasswordError}
        />
      </Card>

      <Card className="h-full p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">TextArea</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <TextArea
          label="TextArea"
          placeholder="Enter text"
          className="col-span-2 w-[500px]"
        />
        <TextArea
          label="TextArea"
          placeholder="Enter text"
          isRequired
          className="col-span-2 w-[500px]"
        />
        <TextArea
          isRequired
          label="TextArea Error"
          className="w-[500px]"
          height="200px"
          placeholder="Enter text"
          error={mockError}
        />
      </Card>

      <Card className="p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">Buttons</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="col-span-1 flex flex-col gap-1 text-black text-[18px]">
          <h3>Primary Button:</h3>
          <Button theme="primary" className="w-[250px] text-[16px]">
            Primary Button
          </Button>
        </div>

        <div className="col-span-1 flex flex-col gap-1 text-black text-[18px]">
          <h3>Secondary Button:</h3>
          <Button theme="secondary" className="w-[250px] text-[16px]">
            Secondary Button
          </Button>
        </div>

        <div className="flex flex-col gap-1 text-black text-[18px]">
          <h3>Cancel Button:</h3>
          <Button theme="cancel" className="w-[250px] text-[16px]">
            Cancel Button
          </Button>
        </div>

        <div className="flex flex-col gap-1 text-black text-[18px]">
          <h3>Cancel Secondary Button:</h3>
          <Button theme="cancel-secondary" className="w-[250px] text-[16px]">
            Cancel Secondary Button
          </Button>
        </div>
      </Card>

      <Card className="p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">Modals</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="col-span-1 flex flex-col gap-1 text-black text-[18px]">
          <Button
            theme="primary"
            className="w-[250px] text-[16px]"
            onClick={() => setIsOpenModal(true)}
          >
            Open Modal
          </Button>
        </div>
      </Card>

      <Modal
        doneButtonText="Save"
        cancelButtonText="Cancel"
        isCancelButton
        className="h-auto w-[496px]"
        open={isOpenModal}
        setOpen={setIsOpenModal}
        title="Save Changes?"
        buttonWidth="120px"
        buttonHeight="40px"
        onDoneClick={() => setIsOpenModal(false)}
        closeOnClick={() => setIsOpenModal(false)}
      >
        <PasswordInput
          label="Please enter password to save changes"
          className="w-full"
        />
      </Modal>
    </div>
  );
}

export default Atoms;
