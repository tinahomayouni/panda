import { put, select } from "redux-saga/effects";
import { loginFailed, loginSuccess } from "./action";

export function* loginSaga() {
  console.log("heloooo");
  try {
    const { username, password } = yield select(state => state.login);

    console.log(
      username,
      password
    )
    const user = yield fetch("asdasd", {
      method: "POST",
      headers: {},
      body: {}
    })

    yield put(loginSuccess(user));
  } catch (e) {
    yield put(loginFailed(e));
  }
}