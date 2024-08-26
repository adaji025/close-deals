import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Authenticated from "@components/Authenticated";
import Unauthenticated from "@components/Unauthenticated";
import { useEffect } from "react";
import { Notifications } from "@mantine/notifications";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("_closeDeals") ?? "";

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/dashboard");
    }
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <Routes>
        <Route
          path="/*"
          element={token ? <Authenticated /> : <Unauthenticated />}
        />
      </Routes>
    </MantineProvider>
  );
}
