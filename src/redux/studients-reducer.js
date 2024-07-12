const ADD_STUDENT = "ADD-STUDENT";
const UPDATE_NEW_TEXT_STUDENT = "UPDATE-NEW-TEXT-STUDENT";

let initialState = {
  dialogs: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Alex" },
  ],
  newStutentPerson: "It-Kamasutra.com",
};
const studientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT: {
      let newStudent = {
        id: 6,
        name: state.newStutentPerson,
        likeCount: 0,
      };
      return {
        ...state,
        dialogs: [...state.dialogs, newStudent],
        newStutentPerson: "",
      };
    }
    case UPDATE_NEW_TEXT_STUDENT: {
      return {
        ...state,
        newStutentPerson: action.newStudent,
      };
    }
    default:
      return state;
  }
};

export const addStudientActionCreator = () => {
  return {
    type: ADD_STUDENT,
  };
};
export const onStudentChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_TEXT_STUDENT, newStudent: text };
};
export default studientsReducer;
