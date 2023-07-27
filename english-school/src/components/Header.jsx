import React from 'react';
import photoMe from '../assets/teacher.png';
import h from'../styles/header.module.scss';
const Header = () => {
   return (
    <header>
        <div className={h.block_header}>
          <div className={h.main_nav}>
            <h1>Easy study</h1>
            <nav className={h.navHeader}>
              <ul className={h.links}>
                <li><a href="/main">Домой</a></li>
                <li><a href="https://translate.google.com/?hl=ru&sl=auto&tl=ru&op=translate">Услуги</a></li>
                <li><a href="#https://translate.google.com/?hl=ru&sl=auto&tl=ru&op=translate">Обо мне</a></li>
                <li><a href="https://translate.google.com/?hl=ru&sl=auto&tl=ru&op=translate">Контакты</a></li>
              </ul>
            </nav>
            <div className={h.rightLinks}>
              <a href='/sign' className={h.signIn}>Войти</a>
            </div>
          </div>
        </div>
    </header>
   )
 
    
}

export default Header;