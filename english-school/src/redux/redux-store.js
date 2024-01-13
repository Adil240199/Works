import { combineReducers, legacy_createStore as createStore } from "redux";
import studientsReducer from "./studients-reducer";
import messagesReducer from "./messages-reducer";
import usersReducers from "./users-reducer";

let reducers = combineReducers({
     studientsReducer: studientsReducer,
     messagesReducer: messagesReducer ,
     usersPage:usersReducers
});

let store = createStore(reducers);

export default store;
