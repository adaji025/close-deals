import { TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import HistoryTable from "./components/HistoryTable";

const CallHistory = () => {
  return (
    <div>
      <div className="max-w-[450px] w-full mt-10">
        <TextInput leftSection={<CiSearch />} radius="xl" className="w-full" placeholder="Search by prospect, product, or by time frame" />
      </div>

      <HistoryTable />
    </div>
  );
};

export default CallHistory;
