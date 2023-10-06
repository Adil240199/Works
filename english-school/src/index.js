// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import App from "./App";
// import state, { subscribe } from "./redux/state";
// import { addStudent, updateNewTextStudent } from "./redux/state";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// let rerenderEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         addStudent={addStudent}
//         updateNewTextStudent={updateNewTextStudent}
//       />
//     </React.StrictMode>
//   );
// };
// // rerenderEntireTree();
// rerenderEntireTree(state);
// subscribe(rerenderEntireTree);

// reportWebVitals();






import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));


let rerenderEntireTree = (state) => {
 root.render(
    <React.StrictMode>
      <App state={state} addStudent={store.addStudent.bind(store)} 
           updateNewTextStudent={store.updateNewTextStudent.bind(store)}/>
    </React.StrictMode>
  );
};
// rerenderEntireTree();
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
