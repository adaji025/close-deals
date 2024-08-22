import { useLocation } from "react-router-dom";
import { DashboardIcon, DocIcon, ReportIcon, ResourceIcon } from "./svg";
import { CiLogout } from "react-icons/ci";
import { Fragment } from "react";
import { useDisclosure } from "@mantine/hooks";
import ConfirmLogout from "./ConfirmLogout";
import { NavLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

interface IProps {
  close: () => void;
}

const SideNav = ({ close }: IProps) => {
  const [showLogoutModal, { open, close: closeLogoutModal }] = useDisclosure();

  const location = useLocation();

  function checkKeysInContent(keys?: string[], content?: string) {
    return keys?.some((key) => content?.includes(key));
  }

  const routes = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      url: "/dashboard",
      keys: ["dashboard"],
    },
    {
      name: "CRM tool",
      icon: <DocIcon />,
      url: "/crm-tool",
      keys: ["crm-tool"],
    },
    {
      name: "Call History",
      icon: <ResourceIcon />,
      url: "/call-history",
      keys: ["call-history"],
    },
    {
      name: "Call reports",
      icon: <ReportIcon />,
      url: "/call-report",
    },
  ];

  const route2 = [
    {
      name: "Settings",
      icon: <IoSettingsOutline size={24} />,
      url: "/settings",
      keys: ["Settings"],
    },
    {
      name: "Profile",
      icon: <LuUser size={24} />,
      url: "/profile",
    },
  ];

  return (
    <Fragment>
      <ConfirmLogout close={closeLogoutModal} opened={showLogoutModal} />
      <div className="flex-1 flex flex-col justify-between  min-h-[calc(100vh-120px)] h-full gap-5 text-[#525252]">
        <div className="grid gap-5">
          {routes.map((route) => (
            <NavLink
              key={route.name}
              className={({ isActive }) =>
                [
                  "nav-item",
                  isActive ||
                  (route.url === "/dashboard" && location.pathname === "/") ||
                  checkKeysInContent(route.keys, location.pathname)
                    ? "is-active"
                    : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to={route.url}
              onClick={close}
            >
              <span>{route.icon}</span>
              {route.name}
            </NavLink>
          ))}
        </div>
        <div className="grid gap-5 mt-[80px]">
          {route2.map((route) => (
            <NavLink
              key={route.name}
              className={({ isActive }) =>
                [
                  "nav-item",
                  isActive ||
                  (route.url === "/dashboard" && location.pathname === "/") ||
                  checkKeysInContent(route.keys, location.pathname)
                    ? "is-active"
                    : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to={route.url}
              onClick={close}
            >
              <span>{route.icon}</span>
              {route.name}
            </NavLink>
          ))}
          <div className="nav-item" onClick={open}>
            <CiLogout size={20} />
            <div>Log Out</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
