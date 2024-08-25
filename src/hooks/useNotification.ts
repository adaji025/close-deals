import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const useNotification = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    showNotification({
      title: "Logout",
      message: `User logged out Login in to continue 😑`,
      color: "Yellow",
    });
    localStorage.removeItem("_closeDeals");
    navigate("/");
  };

  const handleError = (error: any) => {
    const logout = () => {
      localStorage.removeItem("_closeDeals");
      navigate("/");
    };
    if (error?.response?.status == 401) {
      showNotification({
        title: "Error",
        message: "Unauthorized access",
        color: "red",
      });
      return logout();
    }

    if (!error.response) {
      return showNotification({
        title: "Error",
        message: "Network Error, Please check your connection",
        color: "red",
      });
    }

    if (error) {
      return showNotification({
        title: "Error",
        message: error.response.data.message,
        color: "red",
      });
    }

    if (error.response.status === 404) {
      return showNotification({
        title: "Error",
        message: "Route not found",
        color: "red",
      });
    }

    if (error?.response?.status === 500) {
      return showNotification({
        title: "Error",
        message: `${
          error?.response?.data?.message ?? "An error occured, please try again"
        } 🤥`,
        color: "red",
      });
    }

    if (typeof error?.response?.data === "object" && error !== null) {
      for (const [_, value] of Object?.entries(error?.response?.data)) {
        if (typeof value === "string") {
          showNotification({
            title: "Error",
            message: `${value} 🤥`,
            color: "red",
          });
        }
      }
    } else {
      showNotification({
        title: "Error",
        message: `${error?.response?.data?.error} 🤥`,
        color: "red",
      });
    }
  };
  return {
    handleError,
    logoutUser,
  };
};

export default useNotification;
