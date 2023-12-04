"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClearanceSchema } from "@/lib/schema";

import ClearanceFormTable from "./ClearanceFormTable";
import RequirementsTable from "./RequirementsTable";
import ComboBox from "@/components/Shared/Inputs/ComboBox";
import { useStoreClearance } from "@/lib/store";

interface ContentProps {
  closeModal: () => void;
}
const ClearanceAddModalContent = ({ closeModal }: ContentProps) => {
  const { clearanceList } = useStoreClearance();

  const methods = useForm({
    resolver: yupResolver(ClearanceSchema),
  });

  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    // try {
    //   const formData = new FormData();
    //   formData.append("file", data.photo);
    //   const fileName = `${currentDateString()}/${uuidv4()}@${data.photo.name}`;
    //   formData.append("fileName", fileName);
    //   const emailHtml = render(<Email username={data.fname} />);
    //   await Promise.all([
    //     axios.post(addPhoto, formData),
    //     axios.post(sendEmail, { emailHtml, to: [data.email] }),
    //   ]);
    //   toast.success("upload successfully");
    // } catch (error) {
    //   toast.error("Something went wrong");
    // }
  };

  return (
    <div className="  bg-white p-10 rounded-lg lg:mx-10 lg:my-10">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <ComboBox data={clearanceList} />
            <RequirementsTable />
            <ClearanceFormTable />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ClearanceAddModalContent;
