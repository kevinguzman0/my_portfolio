import React from "react";
import logo from "../../img/logo.jpg";

import ItemsMenu from "./ItemsMenu";
import FooterNav from "./FooterNav";
import { NavbarWrapper } from "./NavbarWrapper";

function Navbar({ open, setOpen }) {
  const options = [
    {
      to: "#content-home",
      title: "Home",
    },
    {
      to: "#content-about",
      title: "About",
    },
    {
      to: "#content-skills",
      title: "Skills",
    },
    {
      to: "#content-projects",
      title: "Projects",
    },
    {
      to: "#content-contact",
      title: "Contact",
    },
  ];

  return (
    <NavbarWrapper open={open} className="bg-primary">
      <div className="cover">
        <img src={logo} alt="Cover page" />
      </div>
      <div className="presentation">
        <h4 style={{ fontWeight: "bold" }}>Kevin Guzman</h4>
        <h6 style={{ color: "#2C98F0" }}>Mobile Developer</h6>
      </div>
      <div className="menu">
        {options.map((e, i) => (
          <ItemsMenu
            key={i}
            class={"d-block text-dark p-2"}
            to={e.to}
            onClick={() => setOpen(false)}
          >
            {e.title}
          </ItemsMenu>
        ))}
      </div>
      <FooterNav />
    </NavbarWrapper>
  );
}

export default Navbar;
