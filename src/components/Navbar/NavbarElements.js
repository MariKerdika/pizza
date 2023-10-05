import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  color: #fff;

  p {
    font-weight: bold;
    font-size: 22px;
    margin-right: 5px;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 1.6rem;
`;
