import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";
import TextInput from "../../components/atoms/inputs/TextInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import { type FieldError } from "react-hook-form";
import TextArea from "../../components/atoms/inputs/TextArea";
import { useState } from "react";
import { Modal } from "../../components/atoms/frame/Modal";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "../../components/atoms/Text/Text";
import Header from "../../components/navigations/Header";
import { CardWithHeader } from "../../components/atoms/frame/CardWithHeader";
import LeftMenu from "../../components/navigations/LeftMenu";
import Table from "../../components/atoms/tables/Table";
import RadioGroup from "../../components/atoms/inputs/RadioGroup";

const mockError: FieldError = {
  type: "required",
  message: "This field is required",
};

const mockPasswordError: FieldError = {
  type: "required",
  message: "Password incorrect",
};

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

function Atoms() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const headers = ["ID", "Application_Date", "Leave_Type", "From", "To", "Status"];
  const rows = [
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Sick", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Casual", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Casual", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Casual", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Casual", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
    { ID: "10001", Application_Date: "10/12/2024", Leave_Type: "Casual", From: "10/12/2024", To: "10/12/2024", Status: "Pending" },
  ];
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen p-10 bg-[#ECECEC]">
      <div className="flex flex-row w-full justify-center items-center text-[30px] font-extrabold">
        <h1 className="text-center">Components</h1>
      </div>
      <Card className="h-[300px] p-6 gap-2 grid grid-cols-2 mt-4">
        <span className="col-span-2 text-[24px] font-bold">
          Auth Header
        </span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="col-span-2">
          <Header />
        </div>
      </Card>
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

      <Card className="h-full p-6 gap-2 grid grid-cols-2">
        <span className="col-span-2 text-[24px] font-bold">EmailInput</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />

        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px]">
          <EmailInput
            label="Enter Email"
            placeholder="Enter email"
            className="col-span-2"
          />
          <EmailInput
            label="Enter Email"
            placeholder="Enter email"
            className="col-span-2"
            register={register}
            name="email"
            error={errors.email}
          />
          <Button theme="primary" type="submit" className="w-[100px] mt-4">
            Submit
          </Button>
        </form>
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
      <Card className="h-[300px] p-6 gap-2 grid grid-cols-2 mt-4">
        <span className="col-span-2 text-[24px] font-bold">Text</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="col-span-1 flex flex-col gap-1 text-black text-[18px]">
          <h3>Simple Text:</h3>
          <Text text="Shariar Mahmadmud Duke" />
        </div>

        <div className="col-span-1 flex flex-col gap-1 text-black text-[18px]">
          <h3>Bold Text:</h3>
          <Text text="Shariar Mahmadmud Duke" isBold />
        </div>

        <div className="flex flex-col gap-1 text-black text-[18px]">
          <h3>Text with Color:</h3>
          <Text text="Shariar Mahmadmud Duke" color="blue" />
        </div>

        <div className="flex flex-col gap-1 text-black text-[18px] ">
          <h3> Large Text </h3>
          <Text text="Shariar Mahmadmud Duke" className="text-[24px]" />
        </div>
      </Card>

      <Card className="h-[300px] p-6 gap-4 grid grid-cols-3 mt-4 bg-gray-300">
        <span className="col-span-3 text-[24px] font-bold">CardWithHeader</span>
        <line className="col-span-3 w-full border-b border-black mb-6" />
        <CardWithHeader
          title="Primary Card"
          titleBarSize="h-[60px]"
          className="col-span-1"
        >
          <div className="h-[250px]"></div>
        </CardWithHeader>

        <CardWithHeader
          title="Secondary Card"
          titleBarSize="h-[60px]"
          className="col-span-1"
          titleColor="bg-[#8A006C]"
        >
          <div className="h-[250px]"></div>
        </CardWithHeader>

        <CardWithHeader
          title="Tertiary Card"
          titleBarSize="h-[60px]"
          titleColor="bg-[#0024A4]"
          className="col-span-1"
        >
          <div className="h-[250px]"></div>
        </CardWithHeader>
      </Card>

      <Card className="h-[300px] p-6 gap-6 grid grid-cols-6 mt-4">
        <div className="col-span-1">
          <Text text="Employee LeftMenu" isBold className="text-[20px] mb-6" />
          <LeftMenu />
        </div>
        <div />
        <div className="col-span-1">
          <Text text="Leader LeftMenu" isBold className="text-[20px] mb-6" />
          <LeftMenu isLeader />
        </div>
      </Card>

      <Card className="h-[300px] p-6 gap-2 grid grid-cols-2 mt-4">
        <span className="col-span-2 text-[24px] font-bold">Tables</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="col-span-2">
          <Table
            headers={headers}
            rows={rows}
            className="shadow-lg"
          />
        </div>
      </Card>

      <Card className="h-[300px] p-6 gap-2 grid grid-cols-2 mt-4">
        <span className="col-span-2 text-[24px] font-bold">RadioGroup</span>
        <line className="col-span-2 w-full border-b border-black mb-6" />
        <div className="w-fit">
          <RadioGroup
            name="options"
            title="Select any option:"
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
            ]}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
          <p className="mt-4 text-text-text_bold">
            Selected: {selectedValue || "None"}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Atoms;
