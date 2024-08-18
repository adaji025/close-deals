import { Route, Routes } from "react-router-dom";
import Home from "@pages/Unathenticated/Home";

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Unauthenticated;
