import Button from "../../components/atoms/buttons/Button";
import Text from "../../components/atoms/Text/Text";
import Header from "../../components/navigations/Header";
function LoginPage() {
  return (
    <div className="h-screen">
      <div className="fixed mt-[87px] w-full">
        <Header />
      </div>
      <div className="px-[64px] pt-[52px] pb-[110px] grid grid-cols-2 gap-[60px] h-full">
        <div className="col-span-1 border border-black flex justify-end items-center">
          <div>Form Content</div>
        </div>
        <div className="col-span-1 rounded-3xl bg-[#0DBAD2] flex justify-center items-center px-[100px] py-[120px] overflow-hidden">
          <div className="w-full h-full">
            <div
              style={{
                backgroundImage: "url(/login.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
              className="w-full"
            ></div>
            <div className="row-span-1 flex items-end border border-white">
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
