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

const leaveApplicationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\+?\d+$/, { message: "Invalid phone number" }),
    options: z.string().nonempty({ message: "Please select a leave type" }),
    reason: z.string().min(1, { message: "Reason is required" }),
    from: z.string().min(1, { message: "From date is required" }),
    to: z.string().min(1, { message: "To date is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password confirmation is required" }),
  }).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

  type FormData = z.infer<typeof leaveApplicationSchema>;

export default function LeaveApplicationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(leaveApplicationSchema),
      });
    
      const onSubmit = (data: FormData) => {
        console.log("Form Data Submitted:", data);
        navigate("/leave");
      };
    
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
      />
      <div className="my-10 w-full bg-white shadow p-8 flex flex-col gap-6">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col gap-6">
            <TextFeild label="Applicant Name" text="Md. Rafidul Islam" textFontSize="16px"/>
            <TextFeild label="Department" text="Frontend" textFontSize="16px"/>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <TextFeild label="Employee ID" text="123146546" textFontSize="16px"/>
            <TextFeild label="Designation" text="Software Engineer" textFontSize="16px"/>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 grid grid-cols-2 gap-4">
          <EmailInput
            className="col-span-1"
            label="Email"
            defaultValue="example@gmail.com"
            name="email"
            isRequired
            register={register}
            error={errors.email}
          />
          <TextInput
            className="col-span-1"
            label="Phone"
            defaultValue="+880432762"
            name="phone"
            isRequired
            register={register}
            error={errors.phone}
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
            isRequired
            onChange={(value) => {
              setSelectedValue(value);
              register("options", { value });
            }}
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
            name="from"
            register={register}
            error={errors.from}
          />
          <TextInput
            className="col-span-1"
            label="To"
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
          <div className="my-6 col-span-2 flex flex-row gap-8 justify-center items-center">
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
