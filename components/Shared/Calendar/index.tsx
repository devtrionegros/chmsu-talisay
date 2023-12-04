import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Pleases pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      mode="single"
      fromYear={2015}
      toYear={2025}
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
