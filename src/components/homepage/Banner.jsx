import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="bg-[#f8fafcFF] pt-10 md:pt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
        <h1 className="text-gray-800 text-[38px] md:text-[42px] lg:text-[48px] font-bold leading-tight mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748bFF] text-[15px] md:text-base leading-relaxed mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br className="hidden md:block" />
          relationships that matter most.
        </p>

        <button className="btn border-none bg-[#2D4A3E] text-white hover:bg-[#1f3329] px-6 min-h-0 h-12 flex items-center gap-2 mx-auto">
          <LuPlus size={18} />
          <span className="font-semibold text-[15px] md:text-base">
            Add a Friend
          </span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
