import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const statusStyle = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-[#2D4A3E] text-white",
  };

  return (
    <Link
      to={`/friends/${friend.id}`}
      className="block bg-white border border-[#E5E7EB] rounded-md p-5 hover:shadow-md transition duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-[80px] h-[80px] rounded-full object-cover mb-3"
        />

        <h3 className="text-[#1a2e1a] text-[16px] font-semibold mb-1">
          {friend.name}
        </h3>

        <p className="text-[#6B7280] text-[13px] mb-3">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#E8F5E9] text-[#2D4A3E] text-[12px] font-medium px-3 py-1 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`text-[12px] font-medium px-3 py-1 rounded-full ${statusStyle[friend.status]}`}
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