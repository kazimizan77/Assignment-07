import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 text-[14px] font-medium px-4 py-2 rounded-md transition ${
          isActive
            ? "bg-[#2D4A3E] text-white"
            : "text-[#1a2e1a] hover:text-[#2D4A3E]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
