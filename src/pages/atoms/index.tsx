import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";
import TextInput from "../../components/atoms/inputs/TextInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import { type FieldError } from "react-hook-form";
import TextArea from "../../components/atoms/inputs/TextArea";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "../../components/atoms/Text/Text";

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
    </div>
  );
}

export default Atoms;
