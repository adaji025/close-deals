import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Unauthenticated from "@components/Unauthenticated";

export default function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/*" element={<Unauthenticated />} />
      </Routes>
    </MantineProvider>
  );
}
