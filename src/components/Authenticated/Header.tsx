import { useLocation } from "react-router-dom";
import Notification from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, Button } from "@mantine/core";
import { FaPlus } from "react-icons/fa6";

interface IProps {
  open: () => void;
}
const Header = ({ open }: IProps) => {
  const location = useLocation();

  const pathname = decodeURIComponent(location.pathname);
  const segments = pathname.split("/").filter(Boolean);

  let title;

  if (segments.length === 2) {
    // title = segments[1]
    //   .replace(/-/g, " ");
    title = "";
  } else {
    title = pathname
      .replace(/\//g, "") // Remove all slashes
      .replace(/-/g, " "); // Replace hyphens with spaces
  }
  return (
    <div className="flex w-full justify-between items-center gap-5 h-[80px] border-b">
      <div className="flex flex-1 gap-2 items-center">
        <RxHamburgerMenu
          className="cursor-pointer lg:hidden"
          size={20}
          onClick={open}
        />
        <div className="lg:text-xl font-medium capitalize hidden sm:block">
          {location.pathname === "/"
            ? "Dashboard"
            : location.pathname === "/crm-tool"
            ? "CRM Tool"
            : title}
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-10">
        <button className="sm:flex gap-2 items-center hidden">
          <FaPlus size={16} />
          <div>Add new prospect</div>
        </button>
        <div className="h-[40px] w-[40px] rounded-full bg-primary flex items-center justify-center cursor-pointer sm:hidden">
          <FaPlus size={16} color="white" />
        </div>
        <Button radius="md" className="bg-primary">
          Start teleprompter
        </Button>
        <Notification />
        <Avatar size="md" />
      </div>
    </div>
  );
};

export default Header;
