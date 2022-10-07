import {all} from 'redux-saga/effects';
import taskWatcher from './taskWatcher';
import hintWatcher from './hintWatcher';

export default function* () {
  yield all([taskWatcher(), hintWatcher()]);
}