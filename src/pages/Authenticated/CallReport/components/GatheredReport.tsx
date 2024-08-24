const GatheredReport = () => {
  return (
    <div className="mt-10">
      <div className="p-4 bg-[#F8F4FF]">CloseDeals Gathered Reports</div>
      <div className="grid gap-3 mt-5 text-sm ml-5">
        <div className="flex gap-2">
          <div className="text-[#808080]">Overall Sentiment:</div>
          <div>Positive</div>
        </div>

        <div className="flex gap-2">
          <div className="text-[#808080]">Prospect’s Tone:</div>
          <div>
            Cooperative and interested, with occasional concern about costs
          </div>
        </div>

        <div className="flex gap-2">
          <div className="text-[#808080]">Keywords Frequency:</div>
          <div>
            "Integration" (15 times), "Budget" (10 times), "Efficiency" (8
            times)
          </div>
        </div>

        <div className="mt-3">
          <div className="text-[#808080]">Pain Points Identified:</div>
          <ul className="list-disc ml-5 mt-2 grid gap-3">
            <li>Integration issues with current CRM system</li>
            <li>Budget constraints for new software solutions</li>
          </ul>
        </div>

        <div className="mt-3">
          <div className="text-[#808080]">Needs Identified:</div>
          <ul className="list-disc ml-5 mt-2 grid gap-3">
            <li>Seamless CRM integration</li>
            <li>Cost-effective solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GatheredReport;
