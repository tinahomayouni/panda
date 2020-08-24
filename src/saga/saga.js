import { all, takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../redux/auth/const'
import { loginSaga } from '../redux/auth/saga'

export default function* rootSaga() {
  yield all([
    takeEvery(LOGIN, loginSaga)
  ])
}