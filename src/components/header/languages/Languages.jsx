import React, { useState } from "react";
import l from "./language.module.scss";

const LanguagesBlock = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ["Русский", "Английский", "Казахский"];
  const languageName = list[selected]
  const onClickListItem = (i) => {
    setSelected(i)
    setOpen(false)
  }
  return (
    <div className={l.language_Block}>
      <div className={l.languageChose}>
        <b>Язык:</b>
        <span onClick={() => setOpen(!open)}>{languageName}</span>
      </div>
      {open && (
        <div className={l.languagePopup}>
          <ul>
            {list.map((name, i) => (
              <li
                key={i} onClick={() => onClickListItem(i)} className={selected === i ? l.active : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguagesBlock;
