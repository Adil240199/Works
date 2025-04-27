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
  let stateDialogs = props.stateDialogs;
  let stateMessages = props.stateMessages;

  let dialogElements = stateDialogs.dialogs.map((d) => (
    <DialogItem className={p.dialog} name={d.name} />
  ));
  let messagesElements = stateMessages.messages.map((m) => (
    <Message className={p.message} message={m.message} />
  ));
  let newMessageBody = stateMessages.newMessageBody;

  let newStudentElement = React.createRef();

  let onAddStudient = () => {
    props.addStudient();
  };

  let onStudentChange = () => {
    let text = newStudentElement.current.value;
    props.updateNewStudentText(text);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBodyCreator(body);
  };

  return (
    <div className={p.main}>
      <Resume />

      <h3>Ученики</h3>

      <div className={p.top_section}>
        <button onClick={onAddStudient} className={p.add_student}>
          Добавить ученика
        </button>
        <textarea
          onChange={onStudentChange}
          ref={newStudentElement}
          className={p.texArea}
          value={stateDialogs.newStutentPerson}
        />
      </div>
      <div className={p.bground}>
        <div className={p.students}>
          <div className={p.dialogs}>{dialogElements}</div>

          <div className={p.messages}>
            <div>{messagesElements} </div>
            <div>
              <div>
                <textarea
                  className={p.texArea}
                  value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <button className={p.sendMessage} onClick={onSendMessageClick}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personality;
