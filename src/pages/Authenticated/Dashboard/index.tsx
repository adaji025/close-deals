import CallsChart from "./components/CallsChart";
import IncreaseIcon from "@assets/svg/increase.svg";
import DiamondIcon from "@assets/svg/diamond.svg";
import Calls from "./components/Calls";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5 flex-col xl:flex-row mt-10">
        <div className="xl:w-[48%]">
          <CallsChart />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full xl:w-[60%] cv min-h-[124px] p-5  rounded-xl">
              <div className="text-[#525252] font-medium">
                Conversation rate
              </div>
              <div className="flex gap-2 mt-5">
                <img src={IncreaseIcon} alt="" />
                <div className="text-[20px] sm:text-[24px] md:text-[28px] 2xl:text-[32px] font-semibold text-[#008244]">
                  73.7% Increase
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[40%]">
              <Calls time={48} text="Numbers of calls" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <div className="w-full xl:w-[60%] bg-primary/5  p-5 rounded-xl">
              <div className="text-custom-gray">Achievement & Milestones</div>
              <div className="mt-5 grid gap-5">
                <div className="flex items-center gap-5">
                  <img src={DiamondIcon} alt="" />
                  <div className="">50% Conversion rate</div>
                </div>
                <div className="flex items-center gap-5">
                  <img src={DiamondIcon} alt="" />
                  <div className="">37 Calls completed using Closedeals</div>
                </div>
                <div className="flex items-center gap-5">
                  <img src={DiamondIcon} alt="" />
                  <div className="">1 Month membership</div>
                </div>
              </div>
            </div>
            <div className="w-full grid gap-5 xl:w-[40%]">
              <Calls time={70} text="Peak Call time" />
              <Calls time={5} text="Lowest Call time" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col md:flex-row gap-5 text-[#525252]">
        <div className="flex-1 p-5 bg-primary/5 rounded-xl">
          <div className=" flex flex-col xl:flex-row justify-between gap-5 text-custom-gray">
            <div className="font-medium">Recent Call Summary</div>
            <div className="flex justify-end">Date: July 18th, 2024</div>
          </div>
          <div className="mt-5 text-lg text-black font-medium">
            Prospect: Rit Engines
          </div>

          <div className="mt-2 flex items-center gap-5">
            <div>Call duration: 12 Minutes</div>
            <div className="py-2 px-4 bg-[#E0FFF4] rounded">
              Outcome: Successful
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-3">Key Points Discussed:</div>
            <ul className="list-disc ml-5 grid gap-3">
              <li>Introduced new product features</li>
              <li>Addressed customer concerns about pricing</li>
              <li>Scheduled a follow-up meeting for detailed demo</li>
            </ul>

            <div className="mt-5 text-[#FD0909]">
              Future plans: Meeting scheduled for July 30th, 2024
            </div>
          </div>
        </div>

        <div className="flex-1 p-5 bg-primary/5 rounded-xl">
          <div className="font-medium text-custom-gray">
            Detailed Report Stats
          </div>
          <div className="mt-6">
            <div className="mb-3">Performance metrics:</div>
            <ul className="list-disc ml-5 grid gap-3">
              <li>Response Time: Average of 3 minutes from call initiation</li>
              <li>Talk-to-Listen Ratio: 60% talk, 40% listen</li>
              <li>Call Quality Score: 85/100</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="mb-3">Prospect Engagement:</div>
            <ul className="list-disc ml-5 grid gap-3">
              <li>Questions Asked by Prospects: 150</li>
              <li>Positive Responses: 100</li>
              <li>Negative Responses: 30</li>
              <li>Neutral Responses: 20</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
