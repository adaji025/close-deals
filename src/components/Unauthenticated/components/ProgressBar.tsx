// src/components/ProgressBar.js

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", width: "100%", borderRadius: "16px" }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "46px",
          backgroundColor: progress < 100 ? "blue" : "blue",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          borderTopRightRadius: progress < 100 ? "0px" : "16px",
          borderBottomRightRadius: progress < 100 ? "0px" : "16px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
