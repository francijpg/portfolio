import React from "react"
import PageLinks from "../../constants/links"
import {
  Nav,
  Container,
  Left,
  Right,
  LogoBtn,
  LogoIconBtn,
  BarsBtn,
  MenuLinks,
} from "./navbar.style"

const Navbar = ({ toggleSidebar, isScrolled }) => {
  return (
    <Nav isScrolled={isScrolled}>
      <Container>
        <Left>
          <LogoBtn to="/">
            Francisc
            <LogoIconBtn className="fas fa-spin" />
          </LogoBtn>
        </Left>
        <Right>
          <BarsBtn type="button" aria-label="fabars" onClick={toggleSidebar} />
          <MenuLinks>
            <PageLinks />
          </MenuLinks>
        </Right>
      </Container>
    </Nav>
  )
}

export default Navbar
