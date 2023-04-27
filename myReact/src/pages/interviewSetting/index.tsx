import Input from "@/components/atom/input";
import { MouseEventHandler, useState } from "react";

export default function InterviewSetting() {
  const [value, setValue] = useState("");
  function onChange(x: string) {
    setValue(x);
  }
  function onClick(e: React.MouseEvent) {

  }
  const b = console.log(value);
  return (
    <div>
      <Input placeHolder={"a"} abc={onChange} />
      <Input placeHolder={"b"} abc={onChange} />
      <Input placeHolder={"c"} abc={onChange} />
      <Input placeHolder={"d"} abc={onChange} />
      <div className="flex w-20 text-black h-20 bg-white"></div>
      <button onClick={onClick}>설정하기 </button>
    </div>
  );
}
