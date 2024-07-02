import messagesReducer from "./messages-reducer";
import studientsReducer from "./studients-reducer";


let store = {
  _state: {
    studients: {
      newStutentPerson: "It-Kamasutra.com",
      dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Sergey" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Alex" },
      ],
      messages: [
        { id: 1, message: "How is your It-Camasutra" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageBody: ""
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.studients = studientsReducer(this._state.studients , action )
    this._state.messages = messagesReducer(this._state.studients, action)
    
    this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;

// store OOP