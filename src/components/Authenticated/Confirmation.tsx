import { Button, Modal } from "@mantine/core";

export type IProps = {
  opened: boolean;
  close: () => void;
  btnText: string;
  handleClick: () => void;
  callback?: () => void;
};

const Confirmation = ({ close, handleClick, opened, btnText }: IProps) => {
  return (
    <Modal
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      opened={opened}
      onClose={close}
    >
      <div className="text-lg font-medium mt-10 text-center">
        Are you sure you want to{" "}
        <span className="font-semibold">{btnText} </span>
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
          onClick={handleClick}
        >
          Yes,  <span className="capitalize"> {btnText}</span> 
        </Button>
      </div>
    </Modal>
  );
};

export default Confirmation;
