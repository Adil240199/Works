import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import p from "./Personality.module.scss";

const required = (value) => {
  if (value === undefined || value === null) return "Field is required";
  if (typeof value === "string" && value.trim() === "") return "Field is required";
  return undefined;
};

const maxLengthCreator = (max) => (value) => {
  if (value && value.length > max) return `Maximum ${max} characters`;
  return undefined;
};

const composeValidators = (...validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return undefined;
};

const Textarea = ({ field, form, ...props }) => {
  const error = form.touched[field.name] && form.errors[field.name];
  return (
    <div className={p.formControl}>
      <textarea {...field} {...props} className={p.textArea} />
      {error ? <div className={p.error}>{error}</div> : null}
    </div>
  );
};

Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

const DialogItem = memo(({ id, name }) => (
  <div className={p.dialog}>
    <NavLink to={`/Personality/${id}`}>{name}</NavLink>
  </div>
));

DialogItem.displayName = "DialogItem";
DialogItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
};

const Message = memo(({ message }) => <div className={p.message}>{message}</div>);

Message.displayName = "Message";
Message.propTypes = { message: PropTypes.string.isRequired };

const AddMessageForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};
    const validateMessage = composeValidators(required, maxLengthCreator(200));
    const error = validateMessage(values.newMessageBody);
    if (error) errors.newMessageBody = error;
    return errors;
  };

  return (
    <Formik
      initialValues={{ newMessageBody: "" }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.newMessageBody);
        resetForm();
      }}
    >
      {() => (
        <Form className={p.addMessageForm}>
          <div className={p.messageField}>
            <Field
              component={Textarea}
              name="newMessageBody"
              placeholder="Enter your message"
              rows={4}
            />
          </div>
          <div>
            <button className={p.button} type="submit" aria-label="Send message">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddMessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const Personality = ({
  stateDialogs,
  stateMessages,
  addStudent,
  updateNewStudentText,
  addMessage,
}) => {
  const dialogs = (stateDialogs && stateDialogs.dialogs) || [];
  const messages = (stateMessages && stateMessages.messages) || [];

  const handleAddStudent = useCallback(() => {
    if (typeof addStudent === "function") addStudent();
  }, [addStudent]);

  const handleUpdateNewStudentText = useCallback(
    (eOrValue) => {
      const value = typeof eOrValue === "string" ? eOrValue : eOrValue?.target?.value;
      if (typeof updateNewStudentText === "function") updateNewStudentText(value);
    },
    [updateNewStudentText]
  );

  const handleAddMessage = useCallback(
    (messageBody) => {
      if (typeof addMessage === "function") addMessage(messageBody);
    },
    [addMessage]
  );

  const dialogElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = messages.map((message, index) => {
    const key = message.id ?? message.timestamp ?? `msg-${index}`;
    return <Message key={key} message={message.message ?? ""} />;
  });

  const newStudentValue = (stateDialogs && stateDialogs.newStudentPerson) || "";

  return (
    <div className={p.main}>
      <div className={p.pageHeader}>
        <p>Class communication</p>
        <h1>Messages</h1>
      </div>

      <div className={p.topSection}>
        <button onClick={handleAddStudent} className={p.button} aria-label="Add student">
          Add student
        </button>

        <textarea
          onChange={handleUpdateNewStudentText}
          className={p.textArea}
          value={newStudentValue}
          placeholder="Student name..."
          aria-label="Student name"
        />
      </div>

      <div className={p.workspace}>
        <div className={p.students}>
          <div className={p.dialogs}>{dialogElements}</div>
          <div className={p.messages}>{messagesElements}</div>
        </div>

        <AddMessageForm onSubmit={handleAddMessage} />
      </div>
    </div>
  );
};

export default Personality;
