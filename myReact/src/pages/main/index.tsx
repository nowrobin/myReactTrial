import { useRef } from "react";
import { CustomButton } from "../../components/atom/buttons";

const CONSTRAINTS = { video: true };

export default function MainPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
    }
  };

  return (
    <div className={"cam"}>
      hello
      <video className={"cam"} autoPlay ref={videoRef} />
      <CustomButton text="hello" />
      <button onClick={startVideo}>Start</button>
    </div>
  );
}
