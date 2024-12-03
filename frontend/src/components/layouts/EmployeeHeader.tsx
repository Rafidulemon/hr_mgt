import Text from "../atoms/Text/Text";
import Button from "../atoms/buttons/Button";

interface LayoutProps {
  name: string;
  designation: string;
  joining_date: string;
  hasRightButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function EmployeeHeader(props: LayoutProps) {
  const {
    name = "",
    designation = "",
    joining_date = "",
    hasRightButton = false,
    buttonText = "Click here",
    onButtonClick,
  } = props;

  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-col gap-2 items-start">
        <Text text={name} className="text-[30px] text-black" isBold />
        <div className="w-full flex flex-row gap-2 text-[#555454] text-[16px] font-[500]">
          <Text text={designation} />
          <Text text="|" />
          <Text text={`Started on ${joining_date}`} />
        </div>
      </div>
      {hasRightButton && (
        <Button theme="primary" onClick={onButtonClick}>
          <Text text={buttonText} className="font-semibold px-6" />
        </Button>
      )}
    </div>
  );
}
