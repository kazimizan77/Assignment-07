const Stats = () => {
  const statsData = [
    { id: 1, title: "Total Friends", value: 8 },
    { id: 2, title: "On Track", value: 3 },
    { id: 3, title: "Need Attention", value: 4 },
    { id: 4, title: "Interactions This Month", value: 10 },
  ];

  return (
    <section className="bg-[#F0F4F3] py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-[#E5E7EB] rounded-md p-6 text-center"
            >
              <h3 className="text-[#1a2e1a] text-[36px] md:text-[42px] font-bold">
                {stat.value}
              </h3>
              <p className="text-[#6B7280] text-[14px] mt-1">{stat.title}</p>
            </div>
          ))}
        </div>
        <div className="border-b border-[#e9e9e9] mt-10"></div>
      </div>
    </section>
  );
};

export default Stats;