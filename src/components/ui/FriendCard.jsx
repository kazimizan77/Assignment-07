import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const statusStyle = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-[#efad44] text-white",
    "on-track": "bg-[#244d3f] text-white",
  };

  return (
    <Link
      to={`/friends/${friend.id}`}
      className="group block bg-white border border-gray-200 rounded-2xl p-6 
shadow-sm hover:shadow-xl hover:-translate-y-1 
hover:border-gray-200 
transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-[80px] h-[80px] rounded-full object-cover mb-3"
        />

        <h3 className="text-[#1f2937FF] text-[20px] font-semibold mb-2">
          {friend.name}
        </h3>

        <p className="text-[#64748bFF] text-[13px] mb-2">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#cbfadbFF] text-[#244d3fFF] text-[12px] font-medium px-2 py-1.5 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`text-[12px] font-medium px-2 py-1.5 rounded-full ${statusStyle[friend.status]}`}
        >
          {friend.status === "overdue"
            ? "Overdue"
            : friend.status === "almost due"
              ? "Almost Due"
              : "On-Track"}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
