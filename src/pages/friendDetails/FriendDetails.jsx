import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { HashLoader } from "react-spinners";
import { LuPhoneCall, LuVideo, LuTrash2 } from "react-icons/lu";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { BsArchive } from "react-icons/bs";

import { toast } from "react-toastify";
import useFriends from "../../hooks/useFriends";
import { TimelineContext } from "../../context/TimelineContext";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, loading } = useFriends();
  const { addToTimeline } = useContext(TimelineContext);

  const friend = friends.find((f) => String(f.id) === id);

  const statusStyle = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-[#efad44] text-white",
    "on-track": "bg-[#244d3f] text-white",
  };

  const statusLabel = {
    overdue: "Overdue",
    "almost due": "Almost Due",
    "on-track": "On-Track",
  };

  const handleCheckIn = (type) => {
    const entry = {
      id: Date.now(),
      type,
      friendName: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    addToTimeline(entry);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center bg-[#F0F4F3]">
        <HashLoader color="#2D4A3E" />
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafcFF] min-h-screen py-14 md:py-18">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 text-center shadow-sm">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-[80px] h-[80px] rounded-full object-cover mx-auto mb-3"
              />
              <h2 className="text-gray-800 text-[20px] font-bold mb-2">
                {friend.name}
              </h2>
              <span
                className={`text-[12px] font-medium px-3 py-1 rounded-full ${statusStyle[friend.status]}`}
              >
                {statusLabel[friend.status]}
              </span>
              <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#cbfadbFF] text-[#244d3fFF] text-[12px] font-medium px-3 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#64748bFF] font-medium italic mb-3">"{friend.bio}"</p>
              <p className="text-[#64748bFF] text-[14px]">
                Preferred: {friend.email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-[#E5E7EB] rounded-md text-gray-800 font-medium hover:bg-[#F0F4F3] transition">
                <HiOutlineBellSnooze className="text-[18px]" />
                Snooze 2 Weeks
              </button>

              <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-[#E5E7EB] rounded-md text-gray-800 font-medium hover:bg-[#F0F4F3] transition">
                <BsArchive className="text-[18px]" />
                Archive
              </button>

              <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-[#E5E7EB] rounded-md text-red-500 font-medium hover:bg-red-50 transition">
                <LuTrash2 className="text-[18px]" />
                Delete
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-8 text-center">
                <h3 className="text-[#244d3fFF;] text-[30px] font-bold">
                  {friend.days_since_contact}
                </h3>
                <p className="text-[#6B7280] text-[18px] mt-1">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-8 text-center">
                <h3 className="text-[#244d3fFF;] text-[30px] font-bold">
                  {friend.goal}
                </h3>
                <p className="text-[#6B7280] text-[18px] mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-8 text-center">
                <h3 className="text-[#244d3fFF;] text-[30px] font-bold">
                  {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <p className="text-[#6B7280] text-[18px] mt-1">Next Due</p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#244d3fFF] text-[20px] font-medium">
                  Relationship Goal
                </h3>
                <button className="px-4 py-1 border border-[#E5E7EB] rounded text-[14px] text-[#1f2937FF] hover:bg-[#F0F4F3] transition">
                  Edit
                </button>
              </div>
              <p className="text-[#64748bFF] text-[18px]">
                Connect every{" "}
                <span className="font-bold text-[#1f2937FF]">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
              <h3 className="text-[#244d3fFF] text-[20px] font-semibold mb-4">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-[#E5E7EB] rounded-xl hover:bg-[#f8fafcFF] transition"
                >
                  <LuPhoneCall className="text-[32px] text-[#1f2937FF]" />
                  <span className="text-[18px] text-[#1f2937FF] font-medium">
                    Call
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-[#E5E7EB] rounded-xl hover:bg-[#f8fafcFF] transition"
                >
                  <TbMessageDots className="text-[32px] text-[#1f2937FF]" />
                  <span className="text-[18px] text-[#1f2937FF] font-medium">
                    Text
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-[#E5E7EB] rounded-xl hover:bg-[#f8fafcFF] transition"
                >
                  <LuVideo className="text-[32px] text-[#1f2937FF]" />
                  <span className="text-[18px] text-[#1f2937FF] font-medium">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
