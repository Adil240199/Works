import React from "react";
import h from "./header.module.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import LanguagesBlock from "./languages/Languages";
import logo from "../../images/logo.png";

const Header = (props) => {
  const [openBlock, setOpen] = React.useState(false);
  return (
    <header>
      <div className={h.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>

      <div className={h.main_nav}>
        <div className={h.blockLogo}>
          <NavLink
            to="/main"
            className={h.toHome}
            activeClassName={h.activeLink}
          >
            <img className={h.logoImg} src={logo} alt="logo" />
          </NavLink>
        </div>

        <nav className={`${h.navHeader} ${openBlock ? h.openMenu : ""}`}>
          <ul className={h.links}>
            <li>
              <NavLink activeClass={h.activeLink} to={"/Main"}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink activeClass={h.activeLink} to={"/Users"}>
                Пользователи
              </NavLink>
            </li>
            <li>
              <Link
                activeClass={h.activeLink}
                to="idCources"
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Услуги
              </Link>
            </li>
            <li>
              <NavLink activeClass={h.activeLink} to={"/Personality"}>
                Обо мне
              </NavLink>
            </li>
            <li>
              <Link
                activeClass={h.activeLink}
                to="review"
                spy={true}
                smooth={true}
                offset={40}
                duration={0}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className={h.rightLinks}>
          <NavLink
            to="/Sign"
            className={h.signIn}
            activeClassName={h.activeLink}
          >
            {" "}
            Войти
          </NavLink>
        </div>
        <LanguagesBlock />
        <div className={h.buttonMenu} onClick={() => setOpen(!openBlock)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
