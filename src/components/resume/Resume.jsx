import React from "react";
import r from "./Resume.module.scss";
import teacher from "../../images/teacher.jpg";
const Resume = (props) => {
  return (
    <section className={r.lastSection}>
      <div className={r.blockAboutMe}>
        <img
          className={r.imgAboutme}
          src={teacher}
          alt="Профильная фотография"
        />
        <div className={r.rightBlockResume}>
          <h3 className={r.textName}>Арай Нуруллаева</h3>
          <div className={r.experience + " " + r.skills}>
            Опыт работы:<p className={r.skills}>8 лет ...</p>
          </div>
          <div className={r.certificates + " " + r.skills}>
            Сертификаты:<p className={r.skills}>IELTS,CAMBRIDGE,...</p>{" "}
          </div>
          <div className={r.education + " " + r.skills}>
            Образование:<p className={r.skills}>Высшее ...</p>
          </div>
          <div className={r.sometextAboutme + " " + r.skills}>
            Oбo мне:
            <p className={r.skills}>
              dvisdvjsdiovndvoidsnvodnvodivnodavndasovnasdovnasdvoindsvdoivndiovndoinidovndisovndovdnsvoidv
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
