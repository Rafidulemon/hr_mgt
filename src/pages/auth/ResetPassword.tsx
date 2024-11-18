import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../components/atoms/buttons/Button";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import Text from "../../components/atoms/Text/Text";
import Header from "../../components/navigations/Header";

const schema = z
  .object({
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormData = z.infer<typeof schema>;
function ResetPasswordPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSignUpButton = () => {
    navigate("/auth/signup");
  };

  const handleLogin = (data: FormData) => {
    console.log("Form submitted:", data);
    navigate("/auth/login");
  };
  return (
    <div className="h-screen bg-[#ECECEC]">
      <div className="fixed mt-[87px] w-full z-50">
        <Header />
      </div>
      <div className="px-[64px] py-[52px]  grid grid-cols-2 gap-[60px] h-full">
        <div className="col-span-1 grid grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3 flex items-center justify-center">
            <div className="w-full">
              <Text
                text="Reset Password"
                className="text-[24px] font-semibold"
              />
              <form onSubmit={handleSubmit(handleLogin)} className="mt-[40px]">
                <div className="flex flex-col gap-[22px]">
                  <PasswordInput
                    name="password"
                    error={errors?.password}
                    register={register}
                    label="New Password"
                    placeholder="password"
                  />
                  <PasswordInput
                    name="confirmPassword"
                    error={errors?.confirmPassword}
                    register={register}
                    label="Confirm Password"
                    placeholder="confirm password"
                  />

                  <Button type="submit" theme="primary" isWidthFull>
                    <Text
                      text="Reset Password"
                      className="text-[16px] font-semibold"
                    />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-[#0DBAD2] flex justify-center items-center px-[90px] pt-[130px] pb-[110px] overflow-hidden">
          <div className="w-[70%] h-[80%]  flex flex-col  items-center">
            <div className="w-full">
              <img
                src="/forgetPass.png"
                alt="login"
                className="w-full object-fill"
              />
            </div>
            <div className="flex justify-center items-end h-full  w-full">
              <Button onClick={handleSignUpButton} theme="white" isWidthFull>
                <Text text="Signup" className="text-[16px] font-semibold" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
