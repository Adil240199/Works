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
      return {
        ...state,
        messages: [...state.messages, { id: Date.now(), message: action.body }],
      };
    default:
      return state;
  }
};

export const SendMessageCreator = (body) => {
  return {
    type: SEND_MESSAGE,
    body,
  };
};


export default messagesReducer;
