import Webcam from "react-webcam";
import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useQuery } from "react-query";
import { QueryKeys, restFetcher } from "@/queryclient";

export default function Campage() {
  const webcamRef = useRef<any>();
  const mediaRecorderRef = useRef<any>();
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [x, setX] = useState({
    id: 0,
    number: 0,
    title: "",
    question: "",
    category: "",
  });

  // const question = useQuery(
  //   "questions",
  //   // await restFetcher({
  //   //   method: "GET",
  //   //   path: "/intervew/questions",
  //   //   //queryKey: [QueryKeys.INTERVIEW],
  //   () => fetch("/intervew/questions").then((res) => res.json())
  // );

  const handleDataAvailable = useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    if (webcamRef.current !== null && mediaRecorderRef.current !== null) {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });

      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      //a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  function generator(e: any) {
    e.preventDefault();
    fetch("/intervew/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });
    questions.map((x) => {
      console.log(x);
    });
  }
  function nextClick() {
    questions.map((x) => {
      console.log(x);
      x;
    });
  }
  return (
    <div>
      <Webcam
        mirrored={true}
        imageSmoothing={true}
        audio={true}
        ref={webcamRef}
      />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
      <button onClick={nextClick}>Next</button>
      <div> </div>
      <button onClick={generator}>Generate</button>
    </div>
  );
}
