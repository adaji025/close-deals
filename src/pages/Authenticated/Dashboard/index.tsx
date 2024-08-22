import CallsChart from "./components/CallsChart";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row mt-10">
        <div className="xl:w-[55%]">
          <CallsChart />
        </div>
        <div className="xl:w-[30%]"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;
