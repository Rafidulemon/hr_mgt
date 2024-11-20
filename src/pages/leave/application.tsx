import TextFeild from "../../components/atoms/TextFeild/TextFeild";
import TextInput from "../../components/atoms/inputs/TextInput";
import EmailInput from "../../components/atoms/inputs/EmailInput";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import Button from "../../components/atoms/buttons/Button";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Text from "../../components/atoms/Text/Text";
import RadioGroup from "../../components/atoms/inputs/RadioGroup";
import { EmployeeHeader } from "../../components/layouts/EmployeeHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Please enter a valid email address"),
    phone: z.string().nonempty("Phone number is required"),
    leave_type: z.string().nonempty("Leave Type is required"),
    reason: z.string().nonempty("Reason is required"),
    from: z.string().nonempty("From date is required"),
    to: z.string().nonempty("Till date is required"),
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

export default function LeaveApplicationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const handleOnSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    navigate("/leave");
    console.log(errors);
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
      />
      <div className="my-10 w-full bg-white shadow p-8 flex flex-col gap-6">
        <div className="w-full grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-6">
            <TextFeild label="Applicant Name" text="Md. Rafidul Islam" />
            <TextFeild label="Department" text="Frontend" />
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <TextFeild label="Employee ID" text="123146546" />
            <TextFeild label="Designation" text="Software Engineer" />
          </div>
        </div>
        <form
          className="col-span-2 grid grid-cols-2 gap-4"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <EmailInput
            className="col-span-1"
            label="Email"
            defaultValue="example@gmail.com"
            register={register}
            name="email"
            error={errors.email}
            isRequired
          />
          <TextInput
            className="col-span-1"
            label="Phone"
            defaultValue="+880432762"
            name="phone"
            register={register}
            error={errors.phone}
            isRequired
          />
          <RadioGroup
            name="options"
            title="Leave Type"
            options={[
              { label: "Casual", value: "casual" },
              { label: "Sick", value: "sick" },
              { label: "Annual", value: "annual" },
              { label: "Paternity/Maternity", value: "maternity" },
              { label: "Other", value: "other" },
            ]}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
          <TextInput
            className="col-span-2 mt-4"
            label="Reason"
            isRequired
            name="reason"
            register={register}
            error={errors.reason}
          />
          <TextInput
            className="col-span-1"
            label="From"
            isRequired
            defaultValue="ABC"
            name="from"
            register={register}
            error={errors.from}
          />
          <TextInput
            className="col-span-1"
            label="To"
            defaultValue="ABC"
            isRequired
            name="to"
            register={register}
            error={errors.to}
          />
          <PasswordInput
            className="col-span-1"
            label="Password"
            isRequired
            name="password"
            register={register}
            error={errors.password}
          />
          <PasswordInput
            className="col-span-1"
            label="Confirm Password"
            isRequired
            name="confirm_password"
            register={register}
            error={errors.confirm_password}
          />
          <div className="my-6 col-span-2 flex flex-row gap-8  justify-center items-center">
            <Button type="submit" className="w-[185px]">
              <Text text="Submit" className="text-[16px] font-semibold" />
            </Button>
            <Button theme="secondary" className="w-[185px]">
              View PDF
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
