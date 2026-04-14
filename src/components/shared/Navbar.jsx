import { LuHouse, LuChartLine, LuClock } from "react-icons/lu";
import MyNavLink from "./MyNavLink";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <LuHouse /> },
    { path: "/timeline", text: "Timeline", icon: <LuClock /> },
    { path: "/stats", text: "Stats", icon: <LuChartLine /> },
  ];

  return (
    <nav className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
        <img src={logo} alt="KeenKeeper" className="h-[32px]" />

        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <MyNavLink to={item.path}>
                {item.icon}
                {item.text}
              </MyNavLink>
            </li>
          ))}
        </ul>

        <ul className="flex md:hidden items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <MyNavLink to={item.path}>{item.icon}</MyNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
