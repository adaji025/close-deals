import { useLocation } from "react-router-dom";
import Notification from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, Button, Menu } from "@mantine/core";
import { FaPlus } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";
import AddProspect from "./AddProspect";
import { useDisclosure } from "@mantine/hooks";
import { useProspect } from "@zustand/useProspect";

interface IProps {
  open: () => void;
  showProspect: () => void;
}
const Header = ({ open, showProspect }: IProps) => {
  const [opened, { open: show, close }] = useDisclosure();
  const { updateIsProspect } = useProspect();

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
    <Fragment>
      <AddProspect close={close} opened={opened} />
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
          <button className="sm:flex gap-2 items-center hidden" onClick={show}>
            <FaPlus size={16} />
            <div>Add new prospect</div>
          </button>
          <div
            className="h-[40px] w-[40px] rounded-full bg-primary flex items-center justify-center cursor-pointer sm:hidden"
            onClick={show}
          >
            <FaPlus size={16} color="white" />
          </div>
          <Menu>
            <Menu.Target>
              <Button
                radius="md"
                className="bg-primary"
              >
                Start teleprompter
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => {
                  updateIsProspect(true);
                  show();
                }}
              >
                <div className="py-1 bg-[#E0D5F6] px-3 rounded-md">
                  New prospect
                </div>
              </Menu.Item>
              <Menu.Item onClick={showProspect}>
                <div className="border px-3 py-1 rounded">Select from CRM</div>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Notification />
          <Avatar size="md" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
