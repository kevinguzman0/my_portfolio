import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  -webkit-mask-position: fixed;
  top: 10vh;
  left: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: left 1s ease;

  @media only screen and (min-width: 624px) {
    flex-direction: column;
    position: initial;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: center;
  }
`