import React, { useState } from "react";
import "./main.scss";
import Resume from "../resume/Resume";
import Review from "../reviews/Reviews";
import silver from "../../images/silver.svg";
import time from "../../images/time.svg";
import growth from "../../images/growth.svg";
import person from "../../images/person.svg";
import rightArrow from "../../images/rightArrow.png";
import bronze from "../../images/bronze.svg";
import gold from "../../images/gold.svg";

const Main = () => {
  const [openRegister, setOpenLesson] = React.useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я]*$/.test(value)) {
      setName(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Введите только буквы",
      }));
    }
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Введите только цифры",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Заполните все поля");
      return;
    }

    const message = `Имя: ${name}\nНомер: ${phone}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=36705854018&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  // Не реализовано до конца
  // const subject = 'Запись на пробный урок';
  //   const mailtoUrl = `mailto:adik.muhametov@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  //   window.open(mailtoUrl, '_blank');

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
          <form className="sign" onSubmit={handleSubmit}>
            <p className="sgn_text">
              Имя <br />
              <input
                className="password"
                value={name}
                name="pass"
                onChange={handleNameChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </p>
            <p className="sgn_text">
              Номер <br />{" "}
              <input
                className="email"
                value={phone}
                name="login"
                onChange={handlePhoneChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
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
              <div className="welcomeText">Добро пожаловать</div> в онлайн-школу
              английского <br className="brH2" /> языка
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
          <img className="benefitImg" src={time} alt="time" />
          <figcaption>Гибкий график</figcaption>
        </figure>
        <figure className="imgPrivilege">
          <img className="benefitImg" src={growth} alt="time" />
          <figcaption>
            Поддержка <br />и обратная связь
          </figcaption>
        </figure>
        <figure className="imgPrivilege">
          <img className="benefitImg" src={person} alt="time" />
          <figcaption>
            Персонализированный <br /> подход
          </figcaption>
        </figure>
      </div>

      <span className="lineSeperating"></span>

      <div className="containerSectionSecond" id="idCources">
        <h2 className="title-courses">Выберите подходящий курс</h2>
        <div className="sectionSecond">
          <div className={`course courceElementary`}>
            <div className="top_feed">
              <img src={silver} alt="user" />
              <div className="head_feed">
                <p className="h7">Elementary</p>
                <p className="text_feed">Для начинающих · 100$</p>
              </div>
            </div>

            <div className="container_text">
              <p className="text">
                "Наш курс английского для новичков поможет вам освоить основы
                языка: алфавит, грамматику, разговорные навыки и готовность к
                общению на английском."
              </p>
            </div>
            <div className="containerMore">
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
          <div className={`course courceIntermediate`}>
            <div className="top_feed">
              <img src={bronze} alt="user" />
              <div className="head_feed">
                <p className="h7">Pre-Intermediate</p>
                <p className="text_feed">Средний уровень · 100$</p>
              </div>
            </div>

            <div className="container_text">
              <p className="text">
                Наш курс английского для среднего уровня предназначен для тех,
                кто уже имеет базовые навыки в английском и желает
                усовершенствовать их. Расширьте свой словарный запас, углубите
                знание грамматики
              </p>
            </div>
            <div className="containerMore">
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
          <div className={`course courceUpper`}>
            <div className="top_feed">
              <img src={gold} alt="user" />
              <div className="head_feed">
                <p className="h7">Intermediate</p>
                <p className="text_feed">Продвинутый · 100$</p>
              </div>
            </div>

            <div className="container_text">
              <p className="text">
                "Intermediate Course: Продвинутое обучение английскому с фокусом
                на разговорной практике, грамматике и лексике, а также на чтении
                и понимании сложных текстов и участии в глубоких дискуссиях на
                английском."
              </p>
            </div>
            <div className="containerMore">
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="aboutMe" id="idAboutMe">
        Обо мне
      </h2>
      <Resume />
      <Review />
    </main>
  );
};
export default Main;
