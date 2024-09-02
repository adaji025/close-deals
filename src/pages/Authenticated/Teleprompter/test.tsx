import React, { useState, useRef } from 'react';
import axios from 'axios';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY'; // Replace with your actual API key

const Test: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunks.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const reader = new FileReader();

        reader.onloadend = async () => {
          const base64Audio = reader.result as string;

          // Make a request to Google Speech-to-Text API
          try {
            const response = await axios.post(
              `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`,
              {
                config: {
                  encoding: 'LINEAR16',
                  sampleRateHertz: 16000,
                  languageCode: 'en-US',
                },
                audio: {
                  content: base64Audio.split(',')[1], // Remove the "data:audio/wav;base64," part
                },
              }
            );

            const transcription = response.data.results
              .map((result: any) => result.alternatives[0].transcript)
              .join('\n');
            setTranscript(transcription);
          } catch (error) {
            console.error('Error transcribing audio:', error);
          }
        };

        reader.readAsDataURL(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone', error);
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
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <div>
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default Test;
