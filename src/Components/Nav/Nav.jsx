import { links } from "../../data";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.scss";

const Nav = () => {
  const [Show, setShow] = useState("bottom");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("bottom");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`Nav ${Show}`}>
      <div className="Nav-menu">
        <ul className="Nav-list">
          {links.map(({ icon, name, path }, index) => {
            return (
              <li className="Nav-item" key={index}>
                <NavLink
                  to={path}
                  aria-label={name}
                  className={({ isActive }) =>
                    isActive ? "Nav-link Nav-active" : "Nav-link"
                  }
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
  );
};

export default Nav;
