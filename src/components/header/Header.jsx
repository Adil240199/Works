import React from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.scss";
import logo from "../../images/logoAdil.png";

const navLinks = [
  { to: "/main", label: "Dashboard" },
  { to: "/users", label: "Students" },
  { to: "/profile", label: "Profile" },
  { to: "/personality", label: "Messages" },
];

const Header = ({ isAuth, login, logout }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className={s.sidebar}>
      <div className={s.blockLogo}>
        <NavLink to="/main" className={s.logoLink}>
          <img className={s.logoImg} src={logo} alt="logo" />
          <span>Adil Academy</span>
        </NavLink>
      </div>

      <nav className={`${s.navHeader} ${open ? s.openMenu : ""}`}>
        <ul className={s.links}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} activeClassName={s.activeLink}>
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

      <div className={s.loginBlock}>
        {isAuth 
        ? <div className={s.account}> <span>{login}</span><button onClick={logout}>Logout</button> </div>
        : <NavLink to="/login">Login</NavLink>}
      </div>

      <button
        type="button"
        className={s.buttonMenu}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
