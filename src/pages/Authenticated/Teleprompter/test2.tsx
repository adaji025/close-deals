import React, { useState, useRef } from 'react';
import axios from 'axios';

const AssemblyAIKey = 'dea7499a419b492396024b56ae3c0dbb'; // Replace with your actual API key

const Test2: React.FC = () => {
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

        // Upload audio to AssemblyAI for transcription
        const response = await axios({
          method: 'post',
          url: 'https://api.assemblyai.com/v2/upload',
          headers: {
            authorization: AssemblyAIKey,
            'content-type': 'application/json',
          },
          data: audioBlob,
        });

        const uploadUrl = response.data.upload_url;

        // Request transcription
        const transcriptResponse = await axios({
          method: 'post',
          url: 'https://api.assemblyai.com/v2/transcript',
          headers: {
            authorization: AssemblyAIKey,
            'content-type': 'application/json',
          },
          data: {
            audio_url: uploadUrl,
          },
        });

        const transcriptId = transcriptResponse.data.id;

        // Polling to get the transcription result
        const pollInterval = setInterval(async () => {
          const transcriptResult = await axios({
            method: 'get',
            url: `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
            headers: {
              authorization: AssemblyAIKey,
            },
          });

          if (transcriptResult.data.status === 'completed') {
            setTranscript(transcriptResult.data.text);
            clearInterval(pollInterval);
          }
        }, 5000);
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

export default Test2;
