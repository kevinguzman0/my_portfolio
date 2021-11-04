import React from "react"
import styled from "styled-components"

const MenuButtonWrapper = styled.div`
  margin-top: 15px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.6rem;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <ion-icon name="menu"></ion-icon>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <ion-icon name="close"></ion-icon>
    </MenuButtonWrapper>
  )
}

export default MenuButton