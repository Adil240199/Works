import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const DEMO_AUTH_KEY = "english-school-demo-auth";

const isDemoHost = () => {
  return typeof window !== "undefined" && window.location.hostname.endsWith("github.io");
};

const getDemoAuth = () => {
  try {
    return JSON.parse(localStorage.getItem(DEMO_AUTH_KEY));
  } catch {
    return null;
  }
};

const setDemoAuth = (email) => {
  const login = email ? email.split("@")[0] : "teacher";
  const data = { userId: 1, email: email || "teacher@demo.com", login };
  localStorage.setItem(DEMO_AUTH_KEY, JSON.stringify(data));
  return data;
};

const clearDemoAuth = () => {
  localStorage.removeItem(DEMO_AUTH_KEY);
};

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => (dispatch) => {
  if (isDemoHost()) {
    const data = getDemoAuth();
    if (data) {
      dispatch(setAuthUserData(data.userId, data.email, data.login, true));
    }
    return;
  }

  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  if (isDemoHost()) {
    const data = setDemoAuth(email);
    dispatch(setAuthUserData(data.userId, data.email, data.login, true));
    return;
  }

  authAPI.login(email, password, rememberMe)
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  if (isDemoHost()) {
    clearDemoAuth();
    dispatch(setAuthUserData(null, null , null, false));
    return;
  }

  authAPI.logout()
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null , null, false));
    }
  });
};

export default authReducer;
