import React from "react";
import { NavLink } from "react-router-dom";
import p from "./Personality.module.scss";

const DialogItem = ({ id, name }) => (
  <div className={p.dialog}>
    <NavLink to={`/Personality/${id}`}>{name}</NavLink>
  </div>
);

const Message = ({ message }) => <div className={p.message}>{message}</div>;

const Personality = ({
  stateDialogs,
  stateMessages,
  addStudient,
  updateNewStudentText,
}) => {
  const dialogElements = stateDialogs.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  const messagesElements = stateMessages.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));

  const newStudentElement = React.createRef();

  const onAddStudient = () => addStudient();

  const onStudentChange = () => {
    const text = newStudentElement.current.value;
    updateNewStudentText(text);
  };

  return (
    <div className={p.main}>
      <div className={p.topSection}>
        <button onClick={onAddStudient} className={p.button}>
          Добавить ученика
        </button>
        <textarea
          onChange={onStudentChange}
          ref={newStudentElement}
          className={p.textArea}
          value={stateDialogs.newStutentPerson}
        />
      </div>
      <div>
        <div className={p.students}>
          <div>{dialogElements}</div>
          <div>{messagesElements}</div>
        </div>
        <AddMessageForm />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form>
      <div>
        {/* <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/> */}
      </div>
      <div>
        <button className={p.button}>Send</button>
      </div>
    </form>
  );
};

export default Personality;
