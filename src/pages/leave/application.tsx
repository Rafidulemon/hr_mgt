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
import ApplicationPreview from "./Preview";
import html2pdf from "html2pdf.js";

const leaveApplicationSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\+?\d+$/, { message: "Invalid phone number" }),
    options: z.string().nonempty({ message: "Please select a leave type" }),
    reason: z.string().nonempty({ message: "Reason is required" }),
    from: z.string().nonempty({ message: "From date is required" }),
    to: z.string().nonempty({ message: "To date is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type FormData = z.infer<typeof leaveApplicationSchema>;

export default function LeaveApplicationPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(leaveApplicationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted:", data);
    setUserData((prev) => ({
      ...prev,
      email: data.email,
      phone: data.phone,
      leave_type: data.options,
      reason: data.reason,
      from: data.from,
      to: data.to,
    }));
    console.log("Updated Data Submitted:", userData);
    setIsFormSubmitted(true);
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  const [userData, setUserData] = useState({
    name: "Md. Rafidul Islam",
    email: "rafid@example.com",
    phone: "+8801711111111",
    employeeId: "203214654731",
    department: "Frontend",
    designation: "Software Engineer",
    leave_type: "",
    reason: "",
    from: "",
    to: "",
    date: formattedDate,
  });

  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const generatePDF = () => {
    const element = document.getElementById("application-preview");
    if (element) {
      const applicantName = userData.name.replace(/\s+/g, "_").toLowerCase();
      const date = userData.date.replace(/\//g, "-");
      const fileName = `leave-application_${applicantName}-${date}.pdf`;
  
      html2pdf()
        .from(element)
        .save(fileName);
    }
  };
  

  return (
    <div>
      <EmployeeHeader
        name="Md. Rafidul Islam"
        designation="Software Engineer"
        joining_date="Aug 17, 2023"
      />
      <div className="my-10 w-full bg-white shadow p-8 flex flex-col gap-6">
        {!isFormSubmitted ? (
          <div className="w-full flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col gap-6">
                <TextFeild
                  label="Applicant Name"
                  text={userData.name}
                  textFontSize="16px"
                />
                <TextFeild
                  label="Department"
                  text={userData.department}
                  textFontSize="16px"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-6">
                <TextFeild
                  label="Employee ID"
                  text={userData.employeeId}
                  textFontSize="16px"
                />
                <TextFeild
                  label="Designation"
                  text={userData.designation}
                  textFontSize="16px"
                />
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-span-2 grid grid-cols-2 gap-4"
            >
              <EmailInput
                className="col-span-1"
                label="Email"
                defaultValue={userData.email}
                name="email"
                isRequired
                register={register}
                error={errors.email}
              />
              <TextInput
                className="col-span-1"
                label="Phone"
                defaultValue={userData.phone}
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
                error={errors.options}
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
                <Button theme="cancel" className="w-[185px]" onClick={() => navigate("/leave")}>
                  <Text text="Cancel" className="text-[16px] font-semibold" />
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full">
            <div id="application-preview">
              <ApplicationPreview userData={userData} />
            </div>
            <div className="my-6 col-span-2 flex flex-row gap-8 justify-center items-center">
              <Button className="w-[185px]" onClick={generatePDF}>
                <Text text="Download PDF" className="text-[16px] font-semibold" />
              </Button>
              <Button
                theme="secondary"
                className="w-[185px]"
                onClick={() => navigate("/leave")}
              >
                <Text text="Back" className="text-[16px] font-semibold" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
