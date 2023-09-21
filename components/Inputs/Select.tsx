import { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";
import { SelectProps, ListProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";

const Select = ({ selectLists, label }: SelectProps) => {
  const [selected, setSelected] = useState<ListProps | null>(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false); // Track options visibility
  const listboxRef = useRef<any>(null);

  const handleLabelClick = () => {
    if (listboxRef.current) {
      listboxRef.current.click();
    }
  };

  // Function to handle button click
  const handleButtonClick = () => {
    setIsOptionsVisible(!isOptionsVisible); // Toggle options visibility
  };

  useEffect(() => {
    if (selected !== null)
      if (listboxRef.current) {
        listboxRef.current.click();
      }
  }, [selected]);

  return (
    <div className="w-full">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        onClick={handleLabelClick}
      >
        {label}
      </label>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={handleButtonClick}
            ref={listboxRef}
            className={twMerge(
              "h-12 bg-gray-200 relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md sm:text-sm",
              isOptionsVisible ? "ring-1 ring-gray-700 bg-white" : "" // Add focus styling based on options visibility
            )}
          >
            {selected ? (
              <span className="block truncate">{selected.name}</span>
            ) : (
              <span className="block truncate opacity-50">{label}</span>
            )}

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={isOptionsVisible} // Show options when isOptionsVisible is true
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectLists.map((list, listIdx) => (
                <Listbox.Option
                  key={listIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={list}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {list.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
