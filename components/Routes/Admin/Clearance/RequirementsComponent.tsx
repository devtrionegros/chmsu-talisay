import { Fade } from "@/components/Shared";
import Checkbox from "@/components/Shared/Inputs/Checkbox";
import { Disclosure } from "@headlessui/react";
import { LuChevronUp } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { useStoreRequirements } from "@/lib/store";
import _ from "lodash";
import { useEffect, useState } from "react";

interface RequirementsProps {
  selectedRequirements: {
    id: string;
    name: string;
    description: string;
  }[];
  setSelectedRequirements: any;
}

const RequirementsComponent = ({
  selectedRequirements,
  setSelectedRequirements,
}: RequirementsProps) => {
  const { requirementsList } = useStoreRequirements();
  const [lists, setList] = useState<any>(requirementsList);

  const checkBoxChange = (requirement: any) => {
    const updatedList = lists.map((list: any) => {
      if (requirement?.added && list.id === requirement.id) {
        return {
          ...list,
          added: false,
        };
      }
      if (list.id === requirement.id) {
        return {
          ...list,
          added: true,
        };
      }
      return list;
    });
    setList(updatedList);
    const newSelectedList = _.filter(updatedList, { added: true });
    setSelectedRequirements(newSelectedList);
  };

  useEffect(() => {
    const updateEffectList = requirementsList.map((req) => {
      const updateReq = selectedRequirements.find(
        (selected) => selected.id === req.id
      );
      if (updateReq) {
        return {
          ...req,
          added: true,
        };
      }
      return req;
    });
    setList(updateEffectList);
  }, []);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex-col ">
          {lists.map((d: any) => (
            <div key={d.id} className="flex transition-all">
              <Checkbox
                onchange={() => checkBoxChange(d)}
                check={d?.added || false}
              />
              <Disclosure>
                {({ open }) => (
                  <div className="flex flex-col w-full mt-1">
                    <Disclosure.Button
                      className={twMerge(
                        "flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75",
                        d?.added && "bg-blue-200 hover:bg-blue-100"
                      )}
                    >
                      <span>{d.name}</span>
                      <LuChevronUp
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Fade show={open} closeStyle={false}>
                      <Disclosure.Panel className="  bg-gray-[#D1D5DB] px-4 pb-2 pt-4 text-sm text-gray-500">
                        {d.description}
                      </Disclosure.Panel>
                    </Fade>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequirementsComponent;
