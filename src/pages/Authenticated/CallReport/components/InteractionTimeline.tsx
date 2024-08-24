const InteractionTimeline = () => {
  return (
    <div className="mt-10">
      <div className="p-4 bg-[#F8F4FF]">Detailed Interaction Timeline</div>
      <div className="grid gap-3 mt-5 text-sm ml-5">
        <div className="flex gap-2">
          <div className="text-[#808080]">00:00 - 02:00:</div>
          <div>Objective Description</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">02:00 - 15:00:</div>
          <div>Discussion on current CRM system and pain points</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">15:00 - 35:00:</div>
          <div>Addressing objections and discussing potential solutions</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">35:00 - 40:00:</div>
          <div>Scheduling follow-up and closing remarks</div>
        </div>
      </div>
    </div>
  );
};

export default InteractionTimeline;
