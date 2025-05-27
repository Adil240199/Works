const LOGIN_USER = 'auth/LOGIN_USER';

const initialState = {
  user: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export default loginReducer;
