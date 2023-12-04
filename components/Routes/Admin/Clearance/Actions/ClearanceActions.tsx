"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Dropdown, AddIcon, Modal } from "@/components/Shared";
import UseModal from "../Hooks/useModal";
import ClearanceAddModalContent from "../ClearanceAddModalContent";
import axios from "axios";
import { useStoreRequirements, useStoreClearance } from "@/lib/store";
import toast from "react-hot-toast";
import { clearance, requirements } from "@/lib/apicalls";

const iconClassName = {
  className: "mr-2 h-5 w-5 text-violet-400",
  "aria-hidden": true,
};

const ClearanceActions = () => {
  const { setRequirementsList } = useStoreRequirements();
  const { setClearanceList } = useStoreClearance();
  const [isOpen, setIsOpen] = useState(false);
  const { openModal, closeModal } = UseModal(setIsOpen);

  const OptionIcons = [
    {
      icon: <AddIcon {...iconClassName} />,
      name: "Add Clearance Form",
      click: openModal,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requirementsResponse, clearanceResponse] = await Promise.all([
          axios.get(requirements),
          axios.get(clearance),
        ]);

        setRequirementsList(requirementsResponse.data);
        setClearanceList(clearanceResponse.data);
      } catch (error) {
        console.error("Error fetching clearance:", error);
        toast.error("Something wen wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Dropdown name="Actions">
        <div>
          {OptionIcons.map(({ icon, name, click }) => (
            <Menu.Item key={name}>
              {({ active }) => (
                <button
                  onClick={click}
                  className={`z-10 ${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {icon}
                  {name}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Dropdown>

      {/* MODAL */}
      <Modal {...{ isOpen, closeModal, title: "Create clearance form" }}>
        <ClearanceAddModalContent closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default ClearanceActions;
