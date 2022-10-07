import {put, takeEvery} from 'redux-saga/effects';

import {completeHintAction, initHintsAction, pushHintAction, setHints} from '../reducers/hints/HintsReducer';
import {IHint} from '../reducers/hints';

import HintStorage from '../../utils/HintStorage';
import {PayloadAction} from '@reduxjs/toolkit';

function* initHintsWorker() {
  const hints: IHint[] = yield HintStorage.getHints;
  yield put(setHints(hints));
}

function* pushHintWorker(action: PayloadAction<IHint>) {
  const hints: IHint[] = yield HintStorage.pushHint(action.payload);
  yield put(setHints(hints));
}

function* completeHintWorker(action: PayloadAction<string>) {
  const hints: IHint[] = yield HintStorage.completeHint(action.payload);
  yield put(setHints(hints));
}

function* hintWatcher() {
  yield takeEvery(initHintsAction, initHintsWorker);
  yield takeEvery(pushHintAction, pushHintWorker);
  yield takeEvery(completeHintAction, completeHintWorker);
}

export default hintWatcher;