import { Route, Routes } from "react-router-dom";
import Home from "@pages/Unathenticated/Home";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Unauthenticated;
