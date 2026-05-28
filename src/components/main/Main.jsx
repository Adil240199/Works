import React from "react";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.intro}>
          <div>
            <p className={s.eyebrow}>Teacher workspace</p>
            <h1>English School</h1>
            <p>
              A calm command center for tracking students, checking profiles,
              and keeping class communication close to the work.
            </p>
          </div>
        </div>

        <aside className={s.panel}>
          <h2>Today</h2>
          <div className={s.schedule}>
            <div className={s.lesson}>
              <span className={s.time}>09:00</span>
              <div>
                <strong>Grammar practice</strong>
                <span>Intermediate group</span>
              </div>
            </div>
            <div className={s.lesson}>
              <span className={s.time}>12:30</span>
              <div>
                <strong>Speaking club</strong>
                <span>Conversation drills</span>
              </div>
            </div>
            <div className={s.lesson}>
              <span className={s.time}>16:00</span>
              <div>
                <strong>Progress review</strong>
                <span>Individual student notes</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className={s.stats} aria-label="School overview">
        <div className={s.stat}>
          <strong>24</strong>
          <span>Active students</span>
        </div>
        <div className={s.stat}>
          <strong>8</strong>
          <span>Groups this week</span>
        </div>
        <div className={s.stat}>
          <strong>92%</strong>
          <span>Homework completion</span>
        </div>
      </section>
    </main>
  );
};
export default Main;
