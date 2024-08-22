import { useLocation } from "react-router-dom";
import Notification from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar } from "@mantine/core";

interface IProps {
    open: () => void;
}
const Header = ({open}: IProps) => {
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
          {location.pathname === "/" ? "Dashboard" : title}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Notification />
        <Avatar size="md" />
      </div>
    </div>
  );
};

export default Header;
