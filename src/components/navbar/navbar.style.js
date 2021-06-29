import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FaBars, FaAtom } from "react-icons/fa"
import { COLORS } from "../../constants/colors"

const { white, blue, dark } = COLORS;

export const Nav = styled.nav`
  width: 100%;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 888;
  background-color: ${({ isScrolled }) =>
    isScrolled ? `${dark}` : "transparent"};
`

export const Container = styled.nav`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  li:last-of-type {
    margin-right: 0;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
`

export const MenuLinks = styled.ul`
  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-right: 2rem;
  }

  a {
    text-transform: capitalize;
    color: ${white};
    letter-spacing: 0.2rem;
    transition: all 0.1s linear;
    padding: 0.5rem 0;
  }

  a:hover {
    color: ${blue};
    box-shadow: 0px 3px ${white};
    font-weight: bold;
    font-size: 1.2rem;
  }  

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoBtn = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${white};
  font-family: "Encode Sans Expanded", sans-serif;

  &:hover {
    color: ${blue};
  }
`

export const LogoIconBtn = styled(FaAtom)`
  font-size: 1.5rem;
`

export const BarsBtn = styled(FaBars)`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${white};
  cursor: pointer;
  transition: all 0.1s linear;
  outline-width: 0px;

  &:hover {
    color: ${blue};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
