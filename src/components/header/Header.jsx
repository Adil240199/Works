import React from "react";
import { NavLink } from "react-router-dom";
import h from "./header.module.scss";
import logo from "../../images/logoAdil.png";

const navLinks = [
  { to: "/main", label: "Main" },
  { to: "/users", label: "Users" },
  { to: "/profile", label: "Profile" },
  { to: "/personality", label: "About me" },
];

const Header = ({ isAuth, login }) => {
  const [open, setOpen] = React.useState(false);
  const getActiveClass = ({ isActive }) =>
    isActive ? h.activeLink : undefined;

  return (
    <header className={h.sidebar}>
      <div className={h.blockLogo}>
        <NavLink to="/main" className={getActiveClass}>
          <img className={h.logoImg} src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav className={`${h.navHeader} ${open ? h.openMenu : ''}`}>
        <ul className={h.links}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={getActiveClass}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://social-network.samuraijs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server
            </a>
          </li>
        </ul>
      </nav>

      <div className={h.loginBlock}>
        {isAuth ? login : <NavLink to="/login">Login</NavLink>}
      </div>


      <div
        className={h.buttonMenu}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;