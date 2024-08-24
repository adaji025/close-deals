const CallSumary = () => {
  return (
    <div>
      <div className="p-4 bg-[#F8F4FF]">Call Summary</div>
      
      <div className="grid gap-3 mt-5 text-sm ml-5">
        <div className="flex gap-2">
          <div className="text-[#808080]">Prospect:</div>
          <div>Nafitari D. Lily</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">Sales person (you):</div>
          <div>Edward NewGate</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">Duration:</div>
          <div>40 minutes</div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#808080]">Call Objective:</div>
          <div>
            Conducting an introductory call to gain insight into the prospect's
            requirements.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSumary;
