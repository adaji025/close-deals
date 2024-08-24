const FollowUp = () => {
  return (
    <div className="mt-10">
      <div className="p-4 bg-[#F8F4FF]">Follow-up Action</div>
      <div className="mt-3 ml-5">
        <div className="text-[#808080]">Discussed in Call</div>
        <ul className="list-disc ml-5 mt-2 grid gap-3">
          <li>Follow-Up Demo: Scheduled for July 23, 2024, 2:00 PM</li>
          <li>
            Email Summary: Send a detailed email with pricing and integration
            feature details by EOD July 21, 2024
          </li>
          <li>
            Internal Review: Discuss potential discount strategies with the
            finance team
          </li>
        </ul>
      </div>
      <div className="mt-6 ml-5">
        <div className="text-[#808080]">Recommended by CloseDeals</div>
        <ul className="list-disc ml-5 mt-2 grid gap-3">
          <li>
            Immediate Actions: Prepare follow-up materials and schedule internal
            review
          </li>
          <li>
            Long-Term Actions: Monitor engagement and plan for further
            touchpoints
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FollowUp;
