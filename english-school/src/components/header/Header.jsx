import React from 'react';
import h from'./header.module.scss';
import {NavLink} from "react-router-dom"
import LanguagesBlock from './languages/Languages';

const Header = () => {
  const [openBlock, setOpen] = React.useState(false);
  
   return (
    <header>
          <div className={h.main_nav}>
            <div className={h.blockLogo}>
            <img className={h.logo} src="images/logo.png" alt="logo" />
            </div>
           
            <nav className={`${h.navHeader} ${openBlock ? h.openMenu : ""}`}>
              <ul className={h.links}>
                <li><NavLink to="/main" activeClassName={h.activeLink}>Домой</NavLink></li>
                <li><NavLink to="/services" activeClassName={h.activeLink}>Услуги</NavLink></li>
                <li><NavLink to="/about" activeClassName={h.activeLink}>Обо мне</NavLink></li>
                <li><NavLink to="/contacts" activeClassName={h.activeLink}>Контакты</NavLink></li>
              </ul>
            </nav> 
            
            <div className={h.rightLinks}>
              <NavLink to='/Personality' className={h.signIn} activeClassName={h.activeLink}>Войти</NavLink>
            </div>
            <LanguagesBlock/>
            <div className={h.buttonMenu}  onClick={() => setOpen(!openBlock)} >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
    </header>
   )
 
    
}

export default Header;