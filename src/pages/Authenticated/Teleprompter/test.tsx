import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY!; // Replace with your actual API key

const Test: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          `https://translation.googleapis.com/language/translate/v2/languages?key=${GOOGLE_API_KEY}&target=en`
        );

        if (!response.ok) {
          throw new Error(`Error fetching languages: ${response.statusText}`);
        }

        const data = await response.json();
        const languageList = data.data.languages.map(
          (lang: any) => lang.language
        );
        console.log(languageList);
      } catch (err) {
        // setError(err.message);
        console.error("Error fetching languages:", err);
      }
    };

    fetchLanguages();
  }, []);

  const startRecording = async () => {
    try {
      // Request both video and audio
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      // Discard the video track if you don't need it
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.stop(); // Stop the video track to avoid capturing video
      }

      const audioStream = new MediaStream(stream.getAudioTracks());
      mediaRecorderRef.current = new MediaRecorder(audioStream, {
        mimeType: "audio/webm",
      });
      const audioChunks: Blob[] = [];

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunks.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const reader = new FileReader();

        reader.onloadend = async () => {
          const base64Audio = reader.result as string;

          // Remove the "data:audio/webm;base64," prefix
          const audioContent = base64Audio.split(",")[1];

          // Make a request to Google Speech-to-Text API
          try {
            const response = await axios.post(
              `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`,
              {
                config: {
                  encoding: "WEBM_OPUS", // Change to 'WEBM_OPUS' if using 'audio/webm'
                  sampleRateHertz: 48000,
                  languageCode: "en-US",
                },
                audio: {
                  content: audioContent,
                },
              }
            );

            const transcription = response.data.results
              .map((result: any) => result.alternatives[0].transcript)
              .join("\n");
            setTranscript(transcription);
          } catch (error) {
            // @ts-ignore
            console.error(
              "Error transcribing audio:",
              // @ts-ignore
              error.response ? error.response.data : error.message
            );
          }
        };

        reader.readAsDataURL(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      console.log("Recording started...");
    } catch (error) {
      // @ts-ignore
      if (error.name === "NotSupportedError") {
        alert(
          "System audio capture is not supported on this browser or platform."
        );
        // @ts-ignore
      } else if (error.name === "NotAllowedError") {
        alert("Permission denied for screen audio capture.");
      } else {
        console.error("Error accessing system audio", error);
      }
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <div>
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default Test;
