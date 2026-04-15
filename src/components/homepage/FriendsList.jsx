import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";
import FriendCard from "../ui/FriendCard";

const FriendsList = () => {
  const { friends, loading } = useFriends();

  return (
    <section className="bg-[#f8fafcFF] py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h2 className="text-[#1a2e1a] text-[28px] md:text-[36px] font-bold mb-8">
          Your Friends
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[220px]">
            <HashLoader color="#2D4A3E" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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