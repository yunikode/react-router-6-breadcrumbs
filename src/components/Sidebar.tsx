import { NavLink as Link, useLocation } from "react-router-dom";
import { NavLink } from "@mantine/core";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <NavLink
        label="Home"
        component={Link}
        to="/"
        active={location.pathname === "/"}
      />
      <NavLink
        label="Pro 1"
        component={Link}
        to="/aldi/product1"
        active={location.pathname === "/aldi/product1"}
      />
      <NavLink
        label="Pro 2"
        component={Link}
        to="/rewe/product2"
        active={location.pathname === "/rewe/product2"}
      />
      <NavLink
        label="Pro 3"
        component={Link}
        to="/kaufland/product3"
        active={location.pathname === "/kaufland/product3"}
      />
    </>
  );
};

export default Sidebar;
