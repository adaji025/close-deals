import { Avatar, Divider, Menu } from "@mantine/core";
import { FaRegUser } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ConfirmLogout from "./ConfirmLogout";
import { useDisclosure } from "@mantine/hooks";

const ProfileMenu = () => {
  const [opened, { close, open }] = useDisclosure();
  const navigate = useNavigate();


  return (
    <div className="flex items-center gap-5">
      <ConfirmLogout close={close} opened={opened} />
      <Avatar size="md" />
      <Menu shadow="xs">
        <Menu.Target>
          <button>
            <IoChevronForward />
          </button>
        </Menu.Target>
        <Menu.Dropdown className="mt-2">
          <Menu.Item
            leftSection={<FaRegUser color="#333333" />}
            onClick={() => navigate("/profile")}
          >
            Profile settings
          </Menu.Item>
          <Divider />
          <Menu.Item
            leftSection={<FaRegUser color="#333333" />}
            onClick={() => navigate("/subscription-management")}
          >
            Subscription Management
          </Menu.Item>
          <Divider />
          <Menu.Item leftSection={<FaRegUser color="#333333" />} onClick={open}>
            Log Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
