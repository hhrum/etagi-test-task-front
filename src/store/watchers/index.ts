import {all} from 'redux-saga/effects';
import taskWatcher from './taskWatcher';

export default function* () {
  yield all([taskWatcher()]);
}