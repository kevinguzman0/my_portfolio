import { useState } from "react";

import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 10vh;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <HeaderWrapper>
      <Navbar open={open} setOpen={setOpen} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};

export default Header;
