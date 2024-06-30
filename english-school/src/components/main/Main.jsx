import React from "react";
import "./main.scss";
import Resume from "../resume/Resume";
import Review from "../reviews/Reviews";

const Main = () => {
  const [openRegister, setOpenLesson] = React.useState(false);

  return (
    <main>
      <div className={`   ${openRegister ? "openMenu" : "blockRegister"}`}>
        <div className="containerSignLesson">
          <div className="cross" onClick={() => setOpenLesson(!openRegister)}>
            <div className="horizontal-line"></div>
            <div className="vertical-line"></div>
          </div>
          <h1>Запись на пробный урок </h1>
          <div className="lines">
            <span className="line"></span>
            <p className="some_text">Ведите</p>
            <span className="line"></span>
          </div>
          <form className="sign">
            <p className="sgn_text">
              Имя <br />{" "}
              <input className="password" type="name" name="pass" />
            </p>
            <p className="sgn_text">
              Номер <br />{" "}
              <input className="email" type="number" name="login" />
            </p>
            <p>
              <input className="submit" type="submit" value="Отправить" />
            </p>
          </form>
        </div>
      </div>

      <section className="section" id="sectionId">
        <div className="underSect">
          <div className="blockOne">
            <h2 className="titleWelcome">
              <div className="welcomeText">Добро пожаловать</div> в нашу
              онлайн-школу английского языка
            </h2>
            <p className="subTitle">
              Изучайте английский, не выходя из дома комфортно{" "}
            </p>
            <button
              className="buttonTestLesson"
              onClick={() => setOpenLesson(!openRegister)}
            >
              Запись на пробный урок
            </button>
          </div>
        </div>
        <div className="bgroung"></div>
      </section>

      <div className="privilege">
        <figure className="imgPrivilege">
          <img src="/images/time.svg" alt="time" />
          <figcaption>Гибкий график</figcaption>
        </figure>
        <figure className="imgPrivilege">
          <img src="images/growth.svg" alt="time" />
          <figcaption>
            Поддержка <br />и обратная связь
          </figcaption>
        </figure>
        <figure className="imgPrivilege">
          <img src="/images/person.svg" alt="time" />
          <figcaption>
            Персонализированный <br /> подход
          </figcaption>
        </figure>
      </div>
      
      <span className="lineSeperating"></span>

     
       <div className="containerSectionSecond" id="idCources">
       <h2 className="title-courses">Выберите подходящий курс</h2>
       <div className="sectionSecond">
        <div className={"course"+' '+"courceElementary"}>
          <div className="top_feed">
            <img src="./images/silver.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Elementary</p>
              <p className="text_feed">Для начинающих · 100$</p>
            </div>
          </div>

          <div className="container_text">
          <p className="text">
            "Наш курс английского для новичков поможет вам освоить основы языка:
            алфавит, грамматику, разговорные навыки и готовность к общению на
            английском."
          </p>
          </div>
          <div className="containerMore">
            <img src="/images/rightArrow.png" alt="arrow" />
          </div>
        </div>
        <div className={"course"+' '+"courceIntermediate"}>
          <div className="top_feed">
            <img src="images/bronze.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Pre-Intermediate</p>
              <p className="text_feed">Средний уровень · 100$</p>
            </div>
          </div>

          <div className="container_text">
          <p className="text">
            Наш курс английского для среднего уровня предназначен для тех, кто
            уже имеет базовые навыки в английском и желает усовершенствовать их.
            Расширьте свой словарный запас, углубите знание грамматики
          </p>
          </div>
          <div className="containerMore">
            <img src="/images/rightArrow.png" alt="arrow" />
          </div>
        </div>
        <div className={"course"+' '+"courceUpper"}>
          <div className="top_feed">
            <img src="images/gold.svg" alt="user" />
            <div className="head_feed">
              <p className="h7">Upper-Intermediate</p>
              <p className="text_feed">Продвинутый · 100$</p>
            </div>
          </div>

          <div className="container_text"><p className="text">
            "Upper Intermediate Course: Продвинутое обучение английскому с
            фокусом на разговорной практике, грамматике и лексике, а также на
            чтении и понимании сложных текстов и участии в глубоких дискуссиях
            на английском."
          </p></div>
          <div className="containerMore">
            <img src="/images/rightArrow.png" alt="arrow" />
          </div>
          </div>
            
      </div>
       </div>
      
      <h2 className="aboutMe" id="idAboutMe">Обо мне</h2>
      <Resume />
      <Review />
    </main>
  );
};
export default Main;
