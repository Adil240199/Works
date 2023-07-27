import React from 'react';
import photoMe from '../assets/teacher.png';
import '../styles/main.scss';

const Main = () => {
   
    return (
    <main>
       <section className="section">
          <div className="underSect">
            <div className="blockOne">
              <h2 className="titleWelcome">
                <div className="welcomeText">Добро пожаловать</div> в нашу онлайн-школу английского языка
              </h2>
              <p className="subTitle">Изучайте английский, не выходя из дома комфортно </p>
              <a href="https://www.youtube.com/" className="buttonTestLesson">Запись на пробный урок</a>
            </div>
    
            <div className="blockTwo">
              <img className="photo" src={photoMe} alt="teacher" />
            </div>
          </div>
        </section>


      <h2 className="title-courses">Мои курсы</h2>
      <div className="sectionSecond">
        <div className="course">
          <div className="top_feed">
            <img src="../assets/silver.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Elementary</p>
              <p className="text_feed">Для начинающих · 10 уроков</p>
            </div>
          </div>
          <p className="text">The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals.
            <br /> The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for
          </p>
        </div>
        <div className="course">
          <div className="top_feed">
            <img src="./assets/bronze.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Pre-Intermediate</p>
              <p className="text_feed">Средний уровень · 10 уроков</p>
            </div>
          </div>
          <p className="text">Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas.
            <br /> The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for
          </p>
        </div>
        <div className="course">
          <div className="top_feed">
            <img src="./assets/gold.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Upper-Intermediate</p>
              <p className="text_feed">Продвинутый · 10 уроков</p>
            </div>
          </div>
          <p className="text">The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals.
            <br /> The best online zoo I’ve met. My son delighted very much lives to watch gorillas. Online zoo is one of the ways to instill a love for animals. The best online zoo I’ve met.
            <br /> The best online zoo I’ve met. My son delighted very much lives to
          </p>
        </div>
      </div>

      <section className="lastSection">
        <h2 className="aboutMe">Обо мне</h2>
        <div className="blockAboutMe">
          <img className="imgAboutme" src = {photoMe} alt="Профильная фотография" />
          <div className="rightBlockResume">
            <h3 className="textName">Арай Нурулаева</h3>
            <div className="experience skills">Опыт работы:<p>8 лет ...</p></div>
            <div className="certificates skills">Сертификаты:<p>IELTS,CAMBRIDGE,...</p> </div>
            <div className="education skills">Образование:<p>Высшее ...</p></div>
            <div className="sometextAboutme skills">Обо мне: <p>Твоя нежность и забота о других просто непревзойденные. Ты умеешь слушать и понимать, и твоя доброта не имеет границ.Ты моя опора, мой лучший друг и моя большая любовь.</p></div>
          </div>
        </div>
      </section>
    </main>
  );

 
}
export default Main;