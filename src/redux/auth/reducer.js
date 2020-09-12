import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "./const";

const initialState = {
  loading: false,
  error: ""
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload,
        loading: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: return state;
  }
}

