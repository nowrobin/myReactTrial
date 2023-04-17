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
  const [questions, setQuestions] = useState<any>([]);
  const [generated, setGenerate] = useState(false);
  const [x, setX] = useState([
    {
      id: 0,
      number: 0,
      title: "",
      question: "",
      category: "",
    },
  ]);
  useEffect(() => {
    fetch("/intervew/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setGenerate(true);
        setX(data);
      });
  }, []);
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

  function nextClick() {
    questions.map((x: any) => {
      console.log(x);
      x;
    });
  }
  function CreateModal({ x }: any) {
    return <h1>{x}</h1>;
  }
  console.log(questions);
  return (
    <div>
      <div className="interview">
        {questions.map((x: any) => {
          return (
            <>
              <CreateModal x={x.question} />
            </>
          );
        })}
      </div>
      <div className="camContainer">
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
      </div>
    </div>
  );
}
