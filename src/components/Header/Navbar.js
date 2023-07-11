import React from "react";
import logo from "../../img/logo.jpg";

import ItemsMenu from "./ItemsMenu";
import FooterNav from "./FooterNav";
import { NavbarWrapper } from "./NavbarWrapper";

function Navbar({ open }) {
  const stylesItem = "d-block text-dark p-2";
  return (
    <NavbarWrapper open={open} className="bg-primary">
      <div className="cover">
        <img src={logo} alt="Cover page" />
      </div>
      <div className="presentation">
        <h4 style={{ fontWeight: "bold" }}>Kevin Guzman</h4>
        <h6 style={{ color: "#2C98F0" }}>Front-End Developer</h6>
      </div>
      <div className="menu">
        <ItemsMenu class={stylesItem} to={`#content-home`}>
          Home
        </ItemsMenu>
        <ItemsMenu class={stylesItem} to={`#content-about`}>
          About
        </ItemsMenu>
        <ItemsMenu class={stylesItem} to={`#content-skills`}>
          Skills
        </ItemsMenu>
        <ItemsMenu class={stylesItem} to={`#content-projects`}>
          Projects
        </ItemsMenu>
        <ItemsMenu class={stylesItem} to={`#content-contact`}>
          Contact
        </ItemsMenu>
      </div>
      <FooterNav />
    </NavbarWrapper>
  );
}

export default Navbar;
