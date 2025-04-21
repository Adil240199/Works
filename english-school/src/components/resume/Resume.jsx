import React from "react";
import r from "./Resume.module.scss";

const Resume = (props) => {
  return (
    <section className={r.lastSection}>
      <div className={r.blockAboutMe}>
        <img
          className={r.imgAboutme}
          src="images/teacher.png"
          alt="Профильная фотография"
        />
        <div className={r.rightBlockResume}>
          <h3 className={r.textName}>Арай Нурулаева</h3>
          <div className={r.experience+' '+r.skills}>Опыт работы:<p className={r.skills}>8 лет ...</p></div>
          <div className={r.certificates +' '+ r.skills}>
            Сертификаты:<p className={r.skills}>IELTS,CAMBRIDGE,...</p>{" "}
          </div>
          <div className={r.education +' '+r.skills}>
            Образование:<p className={r.skills}>Высшее ...</p>
          </div>
          <div className={r.sometextAboutme +' '+r.skills}>
            Oбo мне:
            <p className={r.skills}>
              I have a background in English language and linguistics, and I’ve been actively teaching students of different ages and levels. My English proficiency is at a solid C1 level – I speak fluently, write clearly, and have a strong command of grammar, vocabulary, and pronunciation. I can help students from beginner (A1) to upper-intermediate (B2) levels improve their speaking, listening, reading, and writing skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
