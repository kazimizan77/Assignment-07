import { useState } from "react";
import { LuHouse, LuChartLine, LuClock3 } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import MyNavLink from "./MyNavLink";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home", icon: <LuHouse /> },
    { path: "/timeline", text: "Timeline", icon: <LuClock3 /> },
    { path: "/stats", text: "Stats", icon: <LuChartLine /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e9e9e9FF] shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 py-4 md:px-6 h-[74px] flex items-center justify-between">
        <img src={logo} alt="KeenKeeper logo" className="h-[32px]" />

        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <MyNavLink to={item.path}>
                {item.icon}
                {item.text}
              </MyNavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#244d3f] text-[28px] cursor-pointer"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="border-b border-gray-100 last:border-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <MyNavLink to={item.path}>
                  {item.icon}
                  {item.text}
                </MyNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
