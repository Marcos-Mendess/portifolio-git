import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyles = styled.header`
  position: flex;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-black);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--gary-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      z-index: 1;
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const showTheNav = () => {
    setShowNav(!showNav);
  };
  return (
    <NavMenuStyles style={{ "padding-bottom": "3rem" }}>
      <div className="mobile-menu-icon" onClick={showTheNav} tabIndex={0}>
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div className="closeNavIcon" onClick={showTheNav} tabIndex={0}>
          <MdClose />
        </div>
        <li onClick={showTheNav} tabIndex={0}>
          <NavLink to="/">Início</NavLink>
        </li>
        <li onClick={showTheNav} tabIndex={0}>
          <NavLink to="/projetos">Projetos</NavLink>
        </li>
        <li onClick={showTheNav} tabIndex={0}>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}

export default NavMenu;
