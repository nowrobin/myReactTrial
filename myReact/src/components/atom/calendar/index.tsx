import { useState } from "react";
import "./styles.modules.scss";

export default function Calendar() {
  const [day, setday] = useState(Date());
  const [month, setMonth] = useState(Date());

  return (
    <>
      <div> Year</div>
      <div>dsa</div>
    </>
  );
}
