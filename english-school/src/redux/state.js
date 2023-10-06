// let rerenderEntireTree = () => {
//   console.log("State changed")
// }

// let state = {
//   studients: {
//     newStutentPerson:"It-Kamasutra.com",
//     dialogs: [
//       { id: 1, name: "Sasha" },
//       { id: 2, name: "Tanya" },
//       { id: 3, name: "Sergey" },
//       { id: 4, name: "Igor" },
//       { id: 5, name: "Alex" },
//     ],
//     messages: [
//       { id: 1, message: "How is your It-Camasutra" },
//       { id: 2, message: "Hi" },
//       { id: 3, message: "Yo" },
//       { id: 4, message: "Yo" },
//       { id: 5, message: "Yo" },
//     ],
//   },
// };
// export default state;

// window.state = state;
// export let addStudent = () => {
//   let newStudent = {
//     id: 6,
//     name: state.studients.newStutentPerson,
//     likeCount: 0,
//   };
//   state.studients.dialogs.push(newStudent);
//   state.studients.newStutentPerson = '';
//   rerenderEntireTree(state)
// };

// export let updateNewTextStudent = (newStudent) => {
//   state.studients.newStutentPerson = newStudent;
//   rerenderEntireTree(state)
// };

// export const subscribe = (observer) => {
//    rerenderEntireTree = observer
// }


let store = {
  _state: {
    studients: {
      newStutentPerson:"It-Kamasutra.com",
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
    }
  },
  getState () {
     return this._state
  },

  _callSubscriber() {
    console.log('state changed')
  },

  addStudent () {
    let newStudent = {
      id: 6,
      name: this._state.studients.newStutentPerson,
      likeCount: 0,
    };
    this._state.studients.dialogs.push(newStudent);
    this._state.studients.newStutentPerson = '';
    this._callSubscriber(this._state)
  },

  updateNewTextStudent (newStudent) {
    this._state.studients.newStutentPerson = newStudent;
    this._callSubscriber(this._state)
  },

  subscribe (observer) {
    this._callSubscriber  = observer
 },
}

export default store;
window.store = store;