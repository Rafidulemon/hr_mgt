import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "../../components/atoms/buttons/Button";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import Text from "../../components/atoms/Text/Text";
import Header from "../../components/navigations/Header";
const schema = z.object({
  email: z.string().nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

type FormData = z.infer<typeof schema>;
function LoginPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleForgotPasswordClick = () => {
    navigate("/auth/forget-password");
  };

  const handleSignUpButton = () => {
    navigate("/auth/signup");
  };

  const handleLogin = (data: FormData) => {
    console.log("Form submitted:", data);
    navigate("/");
  };
  return (
    <div className="h-screen bg-[#ECECEC]">
      <div className="fixed top-12 left-6 right-6 z-40">
        <Header />
      </div>
      <div className="px-[64px] py-4  grid grid-cols-2 gap-[60px] h-full">
        <div className="col-span-1 grid grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3 flex items-center justify-center">
            <div className="w-full">
              <Text text="Login" className="text-[24px] font-semibold" />
              <form onSubmit={handleSubmit(handleLogin)} className="mt-[40px]">
                <div className="flex flex-col gap-[10px]">
                  <EmailInput
                    name="email"
                    error={errors?.email}
                    label="Email"
                    register={register}
                    placeholder="company@example.com"
                  />
                  <PasswordInput
                    name="password"
                    error={errors?.password}
                    register={register}
                    label="Password"
                    placeholder="password"
                  />

                  <span
                    onClick={handleForgotPasswordClick}
                    className="font-semibold cursor-pointer text-text_bold w-fit"
                  >
                    Forgot Your Password ?
                  </span>
                  <Button
                    type="submit"
                    theme="primary"
                    isWidthFull
                    className="mt-[8px]"
                  >
                    <Text text="Login" className="text-[16px] font-semibold" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-[#0DBAD2] flex justify-center items-center px-[90px] overflow-hidden ">
          <div className="w-[70%] flex flex-col items-center gap-8">
            <div className="w-full">
              <img
                src="/forgetPass.png"
                alt="login"
                className="w-full object-fill"
              />
            </div>
            <div className="flex justify-center  h-full  w-full">
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

export default LoginPage;
