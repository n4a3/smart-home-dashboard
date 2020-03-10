import { combineReducers } from 'redux';
import { authReducer as auth } from './auth/reducer';
import { authSaga } from './auth/sagas';
import { all } from 'redux-saga/effects';

export const rootReducer = combineReducers({
  auth
});

export function* rootSaga() {
  yield all([authSaga]);
}
