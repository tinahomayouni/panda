import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "./const";

export function login(payload) {
  return {
    type: LOGIN,
    payload
  }
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  }
}