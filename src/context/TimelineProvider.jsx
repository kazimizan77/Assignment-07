import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (entry) => {
    setTimeline([entry, ...timeline]);
  };

  const data = {
    timeline,
    addToTimeline,
  };

  return (
    <TimelineContext.Provider value={data}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;