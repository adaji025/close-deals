import { SupportIcon } from "@components/Authenticated/svg";
import {
  Button,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { CiSearch } from "react-icons/ci";

const Settings = () => {
  const timeZoneAbbreviations = [
    "WAT", // West Africa Time (UTC+01:00)
    "PST", // Pacific Standard Time (UTC-08:00)
    "MST", // Mountain Standard Time (UTC-07:00)
    "CST", // Central Standard Time (UTC-06:00)
    "EST", // Eastern Standard Time (UTC-05:00)
    "GMT", // Greenwich Mean Time (UTC+00:00)
    "CET", // Central European Time (UTC+01:00)
    "EET", // Eastern European Time (UTC+02:00)
    "IST", // India Standard Time (UTC+05:30)
    "JST", // Japan Standard Time (UTC+09:00)
    "AEST", // Australian Eastern Standard Time (UTC+10:00)
  ];
  return (
    <div>
      <div className="max-w-[450px] w-full order-2 sm:order-1 mt-5">
        <TextInput
          leftSection={<CiSearch />}
          radius="xl"
          className="w-full"
          placeholder="Search settings"
        />
      </div>

      <div className="mt-10">
        <div className="font-bold text-[#1E1E1E]">General settings</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-6 gap-5 max-w-[800px]">
          <div className="flex items-center gap-5 sm:gap-10 ">
            <div>Text size:</div>
            <div className="max-w-[114px]">
              <Select
                radius="md"
                size="md"
                placeholder="size"
                data={[
                  {
                    label: "Small",
                    value: "small",
                  },
                  {
                    label: "Large",
                    value: "Large",
                  },
                  {
                    label: "Extra Large",
                    value: "Extra Large",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-10 ">
            <div>Language</div>
            <div className="max-w-[114px]">
              <Select
                radius="md"
                size="md"
                className="text-xs"
                placeholder="size"
                data={[
                  {
                    label: "English (UK)",
                    value: "English (UK)",
                  },
                  {
                    label: "English (US)",
                    value: "English (US)",
                  },
                  {
                    label: "Spanish",
                    value: "Spanish",
                  },
                  {
                    label: "French",
                    value: "French",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-10 ">
            <div>Time Zone</div>
            <div className="max-w-[114px]">
              <Select
                radius="md"
                size="md"
                placeholder="Zone"
                data={timeZoneAbbreviations.map((timeZone) => ({
                  label: timeZone,
                  value: timeZone,
                }))}
              />
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-10">
        <div className="font-bold text-[#1E1E1E]">Log in Credentials</div>
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
          <div>Password</div>

          <div className="flex items-center gap-5 sm:gap-10 w-full">
            <div className="max-w-[180px] w-full">
              <PasswordInput size="md" placeholder="*******" />
            </div>
            <div className="cursor-pointer text-primary">Change password</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-bold text-[#1E1E1E]">Permissions</div>
        <div className="mt-5 flex items-center gap-10">
          <div>
            Enable A.I to train and improve prompts based on previous calls
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
      </div>

      <div className="mt-10">
        <div className="font-bold text-[#1E1E1E]">Support and Feedback</div>
        <div className="flex items-center gap-5 mt-5">
          <div>Click to contact support</div>
          <div className="py-2 px-4 flex gap-2 text-primary border rounded-md">
            <SupportIcon />
            <div>Support</div>
          </div>
        </div>

        <div className="max-w-[500px] w-full mt-10">
          <Textarea size="md" label="Submit Feedback/Report Issues" />
          <div className="flex justify-end mt-2">
            <Button radius="md" size="md" variant="outline">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
