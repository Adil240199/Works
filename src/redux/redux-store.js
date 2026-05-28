import { combineReducers, legacy_createStore as createStore,  applyMiddleware  } from "redux";
import {thunk} from 'redux-thunk';
import studientsReducer from "./studients-reducer";
import messagesReducer from "./messages-reducer";
import usersReducers from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  studientsReducer: studientsReducer,
  messagesReducer: messagesReducer,
  usersPage: usersReducers,
  auth: authReducer,
  login:loginReducer
});

let store = createStore(
  reducers,
  applyMiddleware(thunk)
  );

window.store = store;
export default store;
