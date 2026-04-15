import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((e) => e.type === "Call").length;
  const textCount = timeline.filter((e) => e.type === "Text").length;
  const videoCount = timeline.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#7C3AED" },
    { name: "Call", value: callCount, fill: "#2D4A3E" },
    { name: "Video", value: videoCount, fill: "#22C55E" },
  ];

  return (
    <section className="bg-[#F0F4F3] min-h-screen py-14 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h2 className="text-[#1f2937FF] text-[32px] md:text-[42px] font-bold mb-6">
          Friendship Analytics
        </h2>

        <div className="bg-white border border-[#E5E7EB] rounded-md xl: p-8">
          <h3 className="text-[#244d3fFF] text-[20px] font-semibold mb-6">
            By Interaction Type
          </h3>

          {timeline.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-[16px]">
                No interactions yet. Log some check-ins first!
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="80%"
                  cornerRadius={6}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;