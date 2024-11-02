import Button from "../../components/atoms/buttons/Button";
import { Card } from "../../components/atoms/frame/Card";
import Text from "../../components/atoms/Text/Text";

function Atoms() {
  return (
    <div className="flex flex-col w-full p-10 bg-[#ECECEC]">
      <div className="flex flex-row w-full justify-center items-center text-[30px] font-extrabold">
        <h1 className="text-center mb-6">Components</h1>
      </div>
      <Card className="h-[300px] p-6 gap-2 grid grid-cols-2">
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
