import {
  addStudientActionCreator,
  onStudentChangeActionCreator,
} from "../../redux/studients-reducer";
import {
  SendMessageCreator,
} from "../../redux/messages-reducer";
import Personality from "./Personality";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    stateDialogs: state.studientsReducer,
    stateMessages: state.messagesReducer,
    newStudentPerson: state.studientsReducer.newStudentPerson,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewStudentText: (text) => {
      let action = onStudentChangeActionCreator(text);
      dispatch(action);
    },
    addStudent: () => {
      dispatch(addStudientActionCreator());
    },

    addMessage: (messageBody) => {
      dispatch(SendMessageCreator(messageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Personality);
