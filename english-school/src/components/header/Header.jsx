import React from "react";
import h from "./header.module.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import LanguagesBlock from "./languages/Languages";

const Header = () => {
  const [openBlock, setOpen] = React.useState(false);

  return (
    <header>
      <div className={h.main_nav}>
        <div className={h.blockLogo}>
          <NavLink
            to="/main"
            className={h.toHome}
            activeClassName={h.activeLink}
          >
            <img className={h.logo} src="images/logo.png" alt="logo" />
          </NavLink>
        </div>

        <nav className={`${h.navHeader} ${openBlock ? h.openMenu : ""}`}>
          <ul className={h.links}>
            <li>
              <Link
                activeClass={h.activeLink}
                to="sectionId"
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Главная
              </Link>
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
              <Link
                activeClass={h.activeLink}
                to="idAboutMe"
                spy={true}
                smooth={true}
                offset={-90}
                duration={0}
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link
                activeClass={h.activeLink}
                to="idFooter"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className={h.rightLinks}>
          <NavLink
            to="/Users"
            className={h.signIn}
            activeClassName={h.activeLink}
          >
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
