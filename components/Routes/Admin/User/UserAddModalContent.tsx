import React from "react";
import { Button, Select, TextField, Upload } from "@/components/Shared";
import { Gender, EmploymentStatus, Campus } from "@/lib/util";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "@/lib/schema";
import axios from "axios";
import { addPhoto, sendEmail } from "@/lib/apicalls";
import toast from "react-hot-toast";
import { render } from "@react-email/render";
import Email from "@/components/Shared/Email/Email";
import { TbLoader2 } from "react-icons/tb";
import { currentDateString } from "@/lib/dates";
import { v4 as uuidv4 } from "uuid";

interface ContentProps {
  closeModal: () => void;
}
const UserAddModalContent = ({ closeModal }: ContentProps) => {
  const methods = useForm({
    resolver: yupResolver(UserSchema),
  });

  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("file", data.photo);

      const fileName = `${currentDateString()}/${uuidv4()}@${data.photo.name}`;
      console.log(fileName);

      formData.append("fileName", fileName);

      const emailHtml = render(<Email username={data.fname} />);
      await Promise.all([
        axios.post(addPhoto, formData),
        // axios.post(sendEmail, { emailHtml, to: [data.email] }),
      ]);
      toast.success("upload successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" bg-white p-10 rounded-lg h-full lg:mx-10 lg:my-10">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-4">
            <TextField
              type="string"
              label="Firstname"
              placeholder="Firstname"
              name="fname"
            />
            <TextField
              type="string"
              label="Lastname"
              placeholder="Lastname"
              name="lname"
            />
            <TextField
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Select selectLists={Gender} label="Gender" name="gender" />
              <Select
                selectLists={EmploymentStatus}
                label="Employment Status"
                name="empStatus"
              />
              {/* <Select selectLists={Campus} label="Campus" /> */}
            </div>
            <Upload label="Upload Photo" name="photo" />
          </div>
          <div className="flex flex-row mt-6">
            <Button
              onClick={closeModal}
              type="button"
              name="Cancel"
              className=" border-red-500 bg-red-500 hover:bg-red-600 "
            />

            <Button
              name="Submit"
              type="submit"
              disabled={isSubmitting}
              className="flex justify-center items-center gap-1"
            >
              {isSubmitting && <TbLoader2 className="h-4 w-4 animate-spin " />}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default UserAddModalContent;
