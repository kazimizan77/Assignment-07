import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import callIcon from "../../assets/images/call.png";
import textIcon from "../../assets/images/text.png";
import videoIcon from "../../assets/images/video.png";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Call", "Text", "Video"];

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((entry) => entry.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return <img src={callIcon} alt="Call" className="w-5 h-5 object-contain" />;
    if (type === "Text") return <img src={textIcon} alt="Text" className="w-5 h-5 object-contain" />;
    if (type === "Video") return <img src={videoIcon} alt="Video" className="w-5 h-5 object-contain" />;
  };

  return (
    <section className="bg-[#F0F4F3] min-h-screen py-14 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h2 className="text-[#1a2e1a] text-[32px] md:text-[42px] font-bold mb-8">
          Timeline
        </h2>

        <select
          className="w-[200px] h-[46px] px-3 py-3 border border-[#E5E7EB] rounded-md bg-white text-[#6B7280] outline-none mb-6"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {filters.map((f) => (
            <option key={f} value={f}>
              {f === "All" ? "Filter timeline" : f}
            </option>
          ))}
        </select>

        {filteredTimeline.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-[16px]">
              No interactions yet. Go to a friend's page and log a check-in!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white border border-[#E5E7EB] rounded-md px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#F0F4F3] flex items-center justify-center shrink-0">
                  {getIcon(entry.type)}
                </div>
                <div>
                  <p className="text-[#1a2e1a] text-[15px]">
                    <span className="font-semibold">{entry.type}</span>{" "}
                    with {entry.friendName}
                  </p>
                  <p className="text-[#6B7280] text-[13px] mt-1">
                    {entry.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;