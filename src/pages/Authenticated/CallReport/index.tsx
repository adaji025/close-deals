import { TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import CallSumary from "./components/CallSumary";
import InteractionTimeline from "./components/InteractionTimeline";
import GatheredReport from "./components/GatheredReport";
import Recommendation from "./components/Recommendation";
import FollowUp from "./components/FollowUp";

const CallReport = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="bg-[#F4F6D5] py-2 px-3 rounded-md">
          Product: Facebook
        </div>
        <div className="max-w-[450px] w-full order-2 sm:order-1">
          <TextInput
            leftSection={<CiSearch />}
            radius="xl"
            className="w-full"
            placeholder="Search by prospect, product"
          />
        </div>
      </div>
      <div className="mt-10">
        <CallSumary />
        <InteractionTimeline />
        <GatheredReport />
        <Recommendation />
        <FollowUp />
      </div>
    </div>
  );
};

export default CallReport;
