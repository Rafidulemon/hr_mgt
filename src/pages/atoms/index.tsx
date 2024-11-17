import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";
import { CardWithHeader } from "../../components/atoms/frame/CardWithHeader";
import { Modal } from "../../components/atoms/frame/Modal";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import FileInput from "../../components/atoms/inputs/FileInput";
import ImageInput from "../../components/atoms/inputs/ImageInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import RadioGroup from "../../components/atoms/inputs/RadioGroup";
import TextArea from "../../components/atoms/inputs/TextArea";
import TextInput from "../../components/atoms/inputs/TextInput";
import SelectBox from "../../components/atoms/selectBox/SelectBox";
import Table from "../../components/atoms/tables/Table";
import Text from "../../components/atoms/Text/Text";
import TextFeild from "../../components/atoms/TextFeild/TextFeild";
import Header from "../../components/navigations/Header";

const mockError: FieldError = {
  type: "required",
  message: "This field is required",
};

const selectMockError: FieldError = {
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

  const headers = [
    "ID",
    "Application_Date",
    "Leave_Type",
    "From",
    "To",
    "Status",
  ];
  const rows = [
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Sick",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
    {
      ID: "10001",
      Application_Date: "10/12/2024",
      Leave_Type: "Casual",
      From: "10/12/2024",
      To: "10/12/2024",
      Status: "Pending",
    },
  ];
  //  For Select Box
  const options = [
    { label: "Project", value: "project" },
    { label: "Design", value: "design" },
    { label: "Development", value: "development" },
    { label: "Testing", value: "testing" },
  ];

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen">
      <div className="flex flex-row w-full justify-center items-center text-[30px] font-extrabold">
        <h1 className="text-center">Components</h1>
      </div>
      <Card title="Auth Header">
        <Header />
      </Card>
      <Card title="TextInput">
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

      <Card title="PasswordInput">
        <PasswordInput
          label="PasswordInput"
          placeholder="Enter Password"
          className="w-[500px]"
        />
        <PasswordInput
          isRequired
          label="Required PasswordInput"
          placeholder="Enter Password"
          className="w-[500px]"
        />
        <PasswordInput
          isRequired
          label="PasswordInput Error"
          className="w-[500px] mb-4"
          error={mockPasswordError}
        />
      </Card>

      <Card title="TextArea">
        <TextArea
          label="TextArea"
          placeholder="Enter text"
          className="w-[500px]"
        />
        <TextArea
          label="TextArea"
          placeholder="Enter text"
          isRequired
          className="w-[500px]"
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

      <Card title="EmailInput">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px]">
          <EmailInput label="Enter Email" placeholder="Enter email" />
          <EmailInput
            label="Enter Email"
            placeholder="Enter email"
            isRequired
            register={register}
            name="email"
            error={errors.email}
          />
          <Button theme="primary" type="submit" className="w-[100px] mt-4">
            Submit
          </Button>
        </form>
      </Card>

      <Card title="Buttons">
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1 text-black text-[18px]">
            <h3>Primary Button:</h3>
            <Button theme="primary" className="w-[250px] text-[16px]">
              Primary Button
            </Button>
          </div>

          <div className="flex flex-col gap-1 text-black text-[18px]">
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
        </div>
      </Card>

      <Card title="Modals">
        <div className="flex flex-col gap-1 text-black text-[18px]">
          <Button
            theme="primary"
            className="w-[250px] text-[16px]"
            onClick={() => setIsOpenModal(true)}
          >
            Open Modal
          </Button>
        </div>
      </Card>

      <Card title="FileInput">
        <FileInput
          label="Upload File"
          isRequired
          className="w-[300px] mb-6"
          onChange={(e) => {
            const file = e.target.files?.[0];
            console.log("Selected file:", file);
          }}
        />

        <ImageInput
          label="Upload Profile Picture"
          isRequired
          id="profilePic"
          initialImage="/logo.png"
          onChange={(e) => console.log(e.target.files)}
        />
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
      <Card title="Text">
        <div className="w-full grid grid-cols-2 gap-6">
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
        </div>
      </Card>

      <Card title="CardWithHeader">
        <div className="w-full grid grid-cols-3 gap-6">
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
        </div>
      </Card>

      <Card title="Tables">
        <div>
          <Table headers={headers} rows={rows} className="shadow-lg" />
        </div>
      </Card>

      <Card title="RadioGroup">
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

      <Card title="TextFeild">
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="col-span-1 w-full">
            <TextFeild text="Md Rafidul Islam" label="Employee Name" />
          </div>
          <div className="col-span-1 w-full">
            <TextFeild text="123456789" label="Employee Id" />
          </div>
          <div className="col-span-1 w-full">
            <TextFeild text="Frontend" label="Department" />
          </div>
          <div className="col-span-1 w-full">
            <TextFeild
              text="Resigned"
              label="Employee Status"
              textColor="text-red-400"
              labelColor="text-blue-400"
            />
          </div>
        </div>
      </Card>

      <Card title="Select Box">
        <div className="w-full grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-1">
            <SelectBox
              label="Work Type"
              options={options}
              isRequired
              name="work"
              error={selectMockError}
            />
          </div>

          <div className="col-span-1 flex flex-col gap-1">
            <SelectBox
              name="department"
              label="Department"
              options={[
                { label: "HR", value: "hr" },
                { label: "Finance", value: "finance" },
              ]}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Atoms;
