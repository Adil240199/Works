const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  messages: [
    { id: 1, message: "How is your It-Camasutra" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessageBody: "",
};


const messagesReducer = (state = initialState, action) => {
 
  switch (action.type) {

    case SEND_MESSAGE: 
    let body = state.newMessageBody;
    return {
      ...state,
      newMessageBody:"",
       messages:[...state.messages, { id: 6, message: body }]
    }
    ; 

      case UPDATE_NEW_MESSAGE_BODY:
        return {
          ...state,
          newMessageBody:action.body
        }
      
    default:
      return state;
  }
};

export const SendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default messagesReducer;
