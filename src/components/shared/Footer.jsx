import logo from "../../assets/images/logo-xl.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import x from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244d3fFF] text-white mt-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 text-center">
        <img src={logo} alt="footer logo" className="h-[40px] mx-auto mb-4" />

        <p className="text-white/80 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-white text-[20px] font-medium mb-4">Social Links</p>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <img
              src={instagram}
              alt="Instagram"
              className="w-10 h-10 object-contain"
            />
          </span>
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <img
              src={facebook}
              alt="Facebook"
              className="w-10 h-10 object-contain"
            />
          </span>
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <img
              src={x}
              alt="x"
              className="w-10 h-10 object-contain"
            />
          </span>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p> &copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
