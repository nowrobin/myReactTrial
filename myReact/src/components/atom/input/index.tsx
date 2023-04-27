import { useState } from "react";

interface props {
  placeHolder: String;
  abc: (x: string) => void;
}

export default function Input({ placeHolder: String, abc }: props) {
  const [value, setValue] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const x = e.target.value;
    //onChange();
    abc(x);
  }

  return (
    <>
      <input type="text" placeholder="${placeHolder}" onChange={onChange} />
    </>
  );
}
