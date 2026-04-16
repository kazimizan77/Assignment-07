const SummaryCards = () => {
  return (
    <section className="bg-[#f8fafcFF] py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition duration-400">
            <h3 className="text-[#244d3fFF] text-[32px] md:text-[36px] font-bold">
              8
            </h3>
            <p className="text-[#64748bFF] text-[15px] md:text-[18px] mt-2">
              Total Friends
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition duration-400">
            <h3 className="text-[#244d3fFF] text-[32px] md:text-[36px] font-bold">
              3
            </h3>
            <p className="text-[#64748bFF] text-[15px] md:text-[18px] mt-2">
              On Track
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition duration-400">
            <h3 className="text-[#244d3fFF] text-[32px] md:text-[36px] font-bold">
              4
            </h3>
            <p className="text-[#64748bFF] text-[15px] md:text-[18px] mt-2">
              Need Attention
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition duration-400">
            <h3 className="text-[#244d3fFF] text-[32px] md:text-[36px] font-bold">
              6
            </h3>
            <p className="text-[#64748bFF] text-[15px] md:text-[18px] mt-2">
              Interactions This Month
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 mt-10"></div>
      </div>
    </section>
  );
};

export default SummaryCards;
