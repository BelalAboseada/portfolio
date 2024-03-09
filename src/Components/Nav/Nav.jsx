// import React from 'react'
import { links } from "../../data";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { useRef } from "react";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

const Nav = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  console.log(menuRef?.current?.classList.value);
  return (
    <>
      <nav className="Nav " ref={menuRef}>
        <div className="Nav-menu">
          <ul className="Nav-list" ref={menuRef}>
            {links.map(({ icon, name, path }, index) => {
              return (
                <li className="Nav-item" key={index}>
                  <NavLink
                    to={path}
                    aria-label={name}
                    className={({ isActive }) =>
                      isActive ? "Nav-link Nav-active" : "Nav-link"
                    }
                    // onClick={toggleMenu}
                  >
                    {icon}
                    <h3 className="nav-name">{name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <span className="mobile__menu" onClick={toggleMenu}>
        <UseAnimations animation={menu4} size={56} className="Menu_bar" />
      </span>
    </>
  );
};

export default Nav;
