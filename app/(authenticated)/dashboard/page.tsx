"use client";

import React from "react";
import Button from "@/components/Buttons/Button";
import Select from "@/components/Inputs/Select";
import TextField from "@/components/Inputs/TextField";
import Upload from "@/components/Inputs/Upload";
import { Gender, EmploymentStatus, Campus } from "@/lib/util";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "@/lib/schema";

const Page = () => {
  const methods = useForm({
    resolver: yupResolver(UserSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  const cancel = () => {
    console.log("cancel");
  };

  return (
    <div className="relative  w-full ">
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
            <div className="flex flex-row">
              <Button
                onClick={cancel}
                type="button"
                name="Clear"
                className=" border-red-500 bg-red-500 hover:bg-red-600 "
              />
              <Button name="Save" type="submit" />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
