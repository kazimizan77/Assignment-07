import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 text-[14px] font-medium px-4 py-2 rounded-md transition ${
          isActive
            ? "bg-[#244d3fFF] text-white"
            : "text-[#64748bFF] hover:text-[#244d3fFF]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
