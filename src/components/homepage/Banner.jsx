import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="bg-[#F0F4F3] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
        <h1 className="text-[#1a2e1a] text-[38px] md:text-[48px] font-bold leading-tight mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748bFF] leading-relaxed mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          <br/>
          relationships that matter most.
        </p>

        <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#2D4A3E] text-white text-[15px] font-medium rounded-md hover:bg-[#1f3329] transition cursor-pointer">
          <LuPlus className="text-[18px]" />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;
