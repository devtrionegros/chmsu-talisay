"use client";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Dropdown, AddIcon, Modal } from "@/components/Shared";
import UseModal from "../Hooks/useModal";
import UserAddModalContent from "../UserAddModalContent";

const iconClassName = {
  className: "mr-2 h-5 w-5 text-violet-400",
  "aria-hidden": true,
};

const UserActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal, closeModal } = UseModal(setIsOpen);

  const OptionIcons = [
    {
      icon: <AddIcon {...iconClassName} />,
      name: "Add User",
      click: openModal,
    },
  ];
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
      <Modal {...{ isOpen, closeModal, title: "Add User" }}>
        <UserAddModalContent />
      </Modal>
    </>
  );
};

export default UserActions;
