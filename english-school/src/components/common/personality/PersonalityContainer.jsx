import {
  addStudientActionCreator,
  onStudentChangeActionCreator,
} from "../../redux/studients-reducer";
import {
  updateNewMessageBodyCreator,
  SendMessageCreator,
} from "../../redux/messages-reducer";
import Personality from "./Personality";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  return{
    stateDialogs: state.studientsReducer,
    stateMessages: state.messagesReducer,
    newStutentPerson : state.studientsReducer.newStutentPerson,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateNewStudentText: (text) => {
      let action = onStudentChangeActionCreator(text);
      dispatch(action);
    },
    addStudient: () => {
      dispatch(addStudientActionCreator());
    },
     updateNewMessageBodyCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body)); 
     },
     sendMessage: (body) => {
      dispatch(SendMessageCreator());
     },
  }
}

const PersonalityContainer = connect (mapStateToProps,mapDispatchToProps) (Personality)



export default PersonalityContainer;
