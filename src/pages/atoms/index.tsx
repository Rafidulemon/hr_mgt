import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";

function Atoms() {
  return (
    <div className="flex flex-col w-full h-screen p-10 bg-[#ECECEC]">
      <div className="flex flex-row w-full justify-center items-center text-[24px] font-extrabold">
        <h1 className="text-center">Components</h1>
      </div>
      <Card className="h-[300px] p-6 grid grid-cols-2 gap-6">
        <div className="col-span-1 flex flex-col gap-4 text-black text-[24px]">
          <h3>Primary Button:</h3>
          <Button theme="primary" className="w-[250px] text-[16px]">Primary Button</Button>
        </div>

        <div className="col-span-1 flex flex-col gap-4 text-black text-[24px]">
          <h3>Secondary Button:</h3>
          <Button theme="secondary" className="w-[250px] text-[16px]">Secondary Button</Button>
        </div>

        <div className="flex flex-col gap-4 text-black text-[24px]">
          <h3>Cancel Button:</h3>
          <Button theme="cancel" className="w-[250px] text-[16px]">Cancel Button</Button>
        </div>

        <div className="flex flex-col gap-4 text-black text-[24px]">
          <h3>Cancel Secondary Button:</h3>
          <Button theme="cancel-secondary" className="w-[250px] text-[16px]">Cancel Secondary Button</Button>
        </div>
      </Card>
    </div>
  );
}

export default Atoms;
