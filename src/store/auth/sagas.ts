import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { register, login, logout } from '../../api/ls-api';
import { AuthActionTypes } from './types';

const getStages = <T1, T2, T3>(action: {
  request: T1;
  success: T2;
  failure: T3;
}): [T1, T2, T3] => [action.request, action.success, action.failure];

// HANDLERS

function* handleRegister(action: ReturnType<typeof actions.actions.register>) {
  const [request, success, failure] = getStages(actions.registerAsync);
  yield put(request());

  try {
    yield call(register, action.payload);
    yield put(success());
  } catch (error) {
    yield put(failure(error.message));
  }
}

function* handleLogin(action: ReturnType<typeof actions.actions.login>) {
  const [request, success, failure] = getStages(actions.loginAsync);
  yield put(request());

  try {
    const response = yield call(login, action.payload);
    yield put(success(response));
  } catch (error) {
    yield put(failure(error.message));
  }
}

function handleLogout() {
  call(logout);
  put(actions.actions.logout());
}

// WATCHERS

const watchers = [
  fork(function* watchRegister() {
    yield takeLatest(AuthActionTypes.REGISTER, handleRegister);
  }),
  fork(function* watchLogin() {
    yield takeLatest(AuthActionTypes.LOGIN, handleLogin);
  }),
  fork(function* watchLogout() {
    yield takeLatest(AuthActionTypes.LOGOUT, handleLogout);
  })
];

export function* authSaga() {
  yield all(watchers);
}
