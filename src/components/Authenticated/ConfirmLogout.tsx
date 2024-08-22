import { Modal, Button } from "@mantine/core";
import useNotification from "../../hooks/useNotification";

type Props = {
  opened: boolean;
  close: () => void;
};

const ConfirmLogout = ({ close, opened }: Props) => {
  const { logoutUser } = useNotification();
  
  return (
    <Modal centered opened={opened} onClose={close} title="Log Out">
      <div className="text-lg font-medium mt-10 text-center">
        Are you sure you want to log out?
      </div>
      <div className="flex flex-col mx-auto gap-5  my-10 justify-center w-full">
        <Button
          size="md"
          className="bg-primary max-w-[315px] mx-auto w-full"
          onClick={close}
        >
          No, cancel action
        </Button>
        <Button
          size="md"
          variant="outline"
          className="max-w-[315px] w-full mx-auto"
          onClick={logoutUser}
        >
          Yes, log out
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmLogout;
