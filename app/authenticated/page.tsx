"use client";

import React from "react";
import Button from "@/components/Buttons/Button";
import Select from "@/components/Inputs/Select";
import TextField from "@/components/Inputs/TextField";
import Upload from "@/components/Inputs/Upload";
import { Gender, EmploymentStatus, Campus } from "@/lib/util";

const page = () => {
  return (
    <div className="relative  w-full ">
      <div className=" bg-white p-10 rounded-lg h-full lg:mx-10 lg:my-10">
        <form>
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
              <Select selectLists={Gender} label="Gender" />
              <Select
                selectLists={EmploymentStatus}
                label="Employment Status"
              />
              <Select selectLists={Campus} label="Campus" />
            </div>
            <Upload label="Upload Photo" />
          </div>
          <div className="flex flex-row">
            <Button
              name="Clear"
              className=" border-red-500 bg-red-500 hover:bg-red-600 "
            />
            <Button name="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
