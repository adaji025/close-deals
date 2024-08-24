import { Button } from "@mantine/core";
import { useState } from "react";
import AddCrm from "./components/AddCrm";
import CrmTable from "./components/CrmTable";

const CrmTool = () => {
  const [active, setActive] = useState<"add" | "empty" | "added">("added");
  return (
    <div>
      <div className="mt-10">
        {active === "empty" && (
          <div className="flex flex-col gap-5 justify-center text-center">
            <div className="font-semibold text-[#1E1E1E]">
              Click the button below to add your CRM account
            </div>
            <div>
              <Button
                radius="xl"
                className="bg-[#170242] hover:bg-[#170242]/70"
                onClick={() => setActive("add")}
              >
                Add New CRM tool
              </Button>
            </div>
          </div>
        )}

        {active === "add" && <AddCrm setActive={setActive} />}
        {active === "added" && <CrmTable setActive={setActive} />}
      </div>
    </div>
  );
};

export default CrmTool;
