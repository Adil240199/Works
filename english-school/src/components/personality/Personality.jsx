import React from "react";
import { NavLink } from "react-router-dom";
import p from "./Personality.module.scss";
import Resume from "../resume/Resume";

const DialogItem = (props) => {
  let path = "/Personality/" + props.id;
  return (
    <div className={p.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={p.dialog}>{props.message}</div>;
};

const Personality = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem className={p.dialog} name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message className={p.message} message={m.message} />
  ));

  let newStudentElement = React.createRef();

  let addStudient = () => {
    props.addStudent();
  };

  let onStudentChange = () => {
    let text = newStudentElement.current.value;
    props.updateNewTextStudent(text);
  };

  return (
    <div className={p.main}>
      <Resume />

      <h3>Ученики</h3>
      <div className={p.top_section}>
        <button onClick={addStudient} className={p.add_student}>
          Добавить ученика
        </button>
        <textarea
          onChange={onStudentChange}
          ref={newStudentElement}
          className={p.texArea}
          value={props.state.newStutentPerson}
        />
      </div>

      <div className={p.students}>
        <div className={p.dialogs}>{dialogElements}</div>
        <div className={p.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Personality;
