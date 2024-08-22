import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Authenticated from "@components/Authenticated";

export default function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/*" element={<Authenticated />} />
      </Routes>
    </MantineProvider>
  );
}
