import Header from "../../components/navigations/Header";
import Text from "../../components/atoms/Text/Text";
import TextInput from "../../components/atoms/inputs/TextInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import Button from "../../components/atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageInput from "../../components/atoms/inputs/ImageInput";

const schema = z
  .object({
    id: z.string().nonempty("Employee ID is required"),
    department: z.string().nonempty("Employee Department is required"),
    first_name: z.string().nonempty("Employee First Name is required"),
    last_name: z.string().nonempty("Employee Last Name is required"),
    designation: z.string().nonempty("Employee Designation is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type FormData = z.infer<typeof schema>;

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/auth/login");
  };

  const handleOnSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    navigate("/auth/login");
  };

  return (
    <div className="max-w-screen h-screen p-6 bg-[#ECECEC]">
      <div className="fixed top-12 left-6 right-6 z-40">
        <Header />
      </div>
      <div className="grid grid-cols-2 gap-10 px-6 h-full">
        <div className="bg-primary h-[90%] p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="flex flex-col h-full w-[70%] gap-12 justify-center items-center">
            <img src="/demo_logo.png" className="w-[50%]" />
            <Button theme="white" isWidthFull onClick={handleLoginButton}>
              <Text text="Login" className="text-[16px] font-semibold" />
            </Button>
          </div>
        </div>
        <div className="z-0 mt-28 pr-14 flex flex-col gap-6">
          <Text
            text="Sign up"
            className="text-black text-[24px] font-semibold"
          />
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-4"
          >
            <TextInput
              label="Employee ID"
              isRequired
              placeholder="1234564798"
              register={register}
              name="id"
              error={errors.id}
            />
            <TextInput
              label="Department"
              isRequired
              placeholder="Frontend"
              register={register}
              name="department"
              error={errors.department}
            />
            <TextInput
              label="First Name"
              isRequired
              placeholder="Md. Rafidul"
              register={register}
              name="first_name"
              error={errors.first_name}
            />
            <TextInput
              label="Last Name"
              isRequired
              placeholder="Islam"
              register={register}
              name="last_name"
              error={errors.last_name}
            />
            <TextInput
              label="Designation"
              isRequired
              placeholder="Software Engineer"
              register={register}
              name="designation"
              error={errors.designation}
            />
            <EmailInput
              label="Email"
              isRequired
              placeholder="company@example.com"
              register={register}
              name="email"
              error={errors.email}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              register={register}
              name="password"
              error={errors.password}
              isRequired
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm Password"
              register={register}
              name="confirm_password"
              error={errors.confirm_password}
              isRequired
            />
            <ImageInput
              label="Upload Profile Picture"
              isRequired
              id="profilePic"
              initialImage="/default_profile.png"
              onChange={(e) => console.log(e.target.files)}
            />
            <Button type="submit" theme="primary" isWidthFull>
              <Text text="Signup" className="text-[16px] font-semibold" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
