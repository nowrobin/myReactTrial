import { useState } from "react";

interface props {
  placeHolder: String;
}

export default function Input({ placeHolder: String }: props) {
  const [value, setValue] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const x = e.target.value;
    setValue(x);
  }

  return (
    <>
      <input type="text" placeholder="${placeHolder}" onChange={onChange} />
    </>
  );
}
