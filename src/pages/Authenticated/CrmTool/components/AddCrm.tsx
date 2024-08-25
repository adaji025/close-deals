import { Button, PasswordInput, Select, TextInput } from "@mantine/core";

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<"add" | "empty" | "added">>;
}

const AddCrm = ({ setActive }: IProps) => {
  return (
    <div>
      <div className="font-bold text-[#1E1E1E]">Select CRM</div>
      <div className="mt-6 flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-center">
        <div>Select CRM of your choice</div>
        <Select
          size="md"
          placeholder="Click to drop down"
          data={[
            {
              label: "hubspot",
              value: "hubspot",
            },
          ]}
        />
      </div>

      <div className="max-w-[500px]">
        <div className="font-bold text-[#1E1E1E] mt-10">
          Enter CRM Log in details
        </div>
        <div className="grid mt-5 gap-5">
          <TextInput size="md" label="Email/Username" />
          <PasswordInput size="md" label="Password" />
          <TextInput size="md" label="API key or token (Optional)" />
        </div>
      </div>

      <div className="font-bold text-[#1E1E1E] mt-10">Permissions</div>
      <div className="mt-5 flex items-center gap-10">
        <div>
          Allow Closedeals to access contacts data from connected CRM account
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex h-[48px] cursor-pointer rounded-md w-[52px] bg-black text-white font-medium text-center justify-center items-center">
            Yes
          </div>
          <div className="flex h-[48px] cursor-pointer rounded-md w-[52px] border font-medium text-center justify-center items-center">
            No
          </div>
        </div>
      </div>

      <Button
        size="md"
        radius="md"
        className="bg-primary mt-10"
        onClick={() => setActive("added")}
      >
        Add CRM
      </Button>
    </div>
  );
};

export default AddCrm;
