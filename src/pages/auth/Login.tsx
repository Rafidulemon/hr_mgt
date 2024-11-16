import Button from "../../components/atoms/buttons/Button";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import Text from "../../components/atoms/Text/Text";
import Header from "../../components/navigations/Header";
function LoginPage() {
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
              <Text text="Login" className="text-[24px] font-semibold" />
              <form className="mt-[40px]">
                <div className="flex flex-col gap-[22px]">
                  <EmailInput label="Email" isRequired />
                  <PasswordInput isRequired label="Password" />
                  <Text
                    text="Forgot Your Password ?"
                    className="font-semibold"
                  />
                  <Button theme="primary" isWidthFull>
                    <Text text="Login" className="text-[16px] font-semibold" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-[#0DBAD2] flex justify-center items-center px-[90px] pt-[130px] pb-[90px] overflow-hidden">
          <div className="w-full h-full  grid grid-rows-6">
            <div className="w-full row-span-4">
              <img
                src="/login.png"
                alt="login"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="row-span-2 flex items-center">
              <Button theme="white" isWidthFull>
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
