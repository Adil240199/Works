import { combineReducers, legacy_createStore as createStore } from "redux";
import studientsReducer from "./studients-reducer";
import messagesReducer from "./messages-reducer";
import usersReducers from "./users-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
     profilePage: profileReducer,
     studientsReducer: studientsReducer,
     messagesReducer: messagesReducer ,
     usersPage:usersReducers
});

let store = createStore(reducers);

export default store;
