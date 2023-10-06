import React from 'react';
import './main.scss';


import { NavLink } from 'react-router-dom';
import Resume from '../resume/Resume';
import Review from '../reviews/Reviews';

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
              <NavLink to='/sign' className="buttonTestLesson">Запись на пробный урок</NavLink>
            </div>
          </div>
        </section>
     <div className='privilege'>
     <figure className="imgPrivilege">
   <img src="images/person.svg" alt="time"/>
   <figcaption>Гибкий график</figcaption>
  </figure>
  <figure className="imgPrivilege">
   <img src="images/growth.svg" alt="time"/>
   <figcaption>Поддержка <br />и обратная связь</figcaption>
  </figure>
  <figure className="imgPrivilege">
   <img src="images/time.svg" alt="time"/>
   <figcaption>Персонализированный <br /> подход</figcaption>
  </figure>
  
     </div>
         <span className='lineSeperating'></span>
      <h2 className="title-courses">Мои курсы</h2>
      <div className="sectionSecond">
        <div className="course">
          <div className="top_feed">
            <img src="images/silver.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Elementary</p>
              <p className="text_feed">Для начинающих · 10 уроков</p>
            </div>
          </div>
          <p className="text">Наш курс английского для начинающих предоставляет вам возможность освоить основы английского языка с нуля. 
            <br /> Вы узнаете алфавит, базовую грамматику, научитесь говорить на простых темах и развивать навыки чтения и письма, подготавливая вас к успешному общению на английском языке.
          </p>
        </div>
        <div className="course">
          <div className="top_feed">
            <img src="images/bronze.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Pre-Intermediate</p>
              <p className="text_feed">Средний уровень · 10 уроков</p>
            </div>
          </div>
          <p className="text">Наш курс английского для среднего уровня предназначен для тех, кто уже обладает базовыми знаниями английского и стремится углубить свои навыки. Вы расширите свой словарный запас, углубите понимание грамматики и научитесь более уверенно и свободно общаться на английском языке.
            <br /> Курс также включает в себя обучение чтению и аудированию более сложных текстов, а также развитие навыков письма для более продвинутых тем и задач.
          </p>
        </div>
        <div className="course">
          <div className="top_feed">
            <img src="images/gold.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Upper-Intermediate</p>
              <p className="text_feed">Продвинутый · 10 уроков</p>
            </div>
          </div>
          <p className="text">Наш курс английского для уровня Upper Intermediate разработан для тех, кто уже обладает хорошими базовыми навыками в английском и готов продвигаться дальше. Вы совершенствуете свои навыки говорения, а также углубляете знание грамматики и лексики на более высоком уровне. 
            <br />Курс включает в себя изучение более сложных тем и контекстов, чтение профессиональной и литературной литературы, а также развитие навыков аудирования и участия в более глубоких дискуссиях на английском языке. Этот курс поможет вам добиться более высокой степени владения английским и уверенности в общении на нем.
            <br /> Этот курс поможет вам добиться более высокой степени владения английским и уверенности в общении на нем.
          </p>
        </div>
      </div>
      <h2 className="aboutMe">Обо мне</h2>
      <Resume />
      <Review />
    </main>
  );

 
}
export default Main;