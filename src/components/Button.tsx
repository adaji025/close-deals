import { Button } from "@mantine/core";

interface IProps {
  text: string;
  onclick?: () => void;
  size?: "lg" | "md" | "sm" | "xl";
}
const ButtonComp = ({ text, onclick, size }: IProps) => {
  return (
    <Button
      onClick={onclick}
      size={size? size : "md" }
      className="bg-primary px-12 rounded-md font-extralight hover:scale-105 duration-300 w-full"
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
