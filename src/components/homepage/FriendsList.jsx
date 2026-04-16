import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";
import FriendCard from "../ui/FriendCard";

const FriendsList = () => {
  const { friends, loading } = useFriends();

  return (
    <section className="bg-[#f8fafcFF] pb-10 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h2 className="text-[#1f2937FF] text-[22px] md:text-[28px] font-semibold mb-4">
          Your Friends
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[220px]">
            <HashLoader color="#2D4A3E" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FriendsList;