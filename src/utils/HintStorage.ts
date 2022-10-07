import {LocalKey, LocalStorage} from 'ts-localstorage';
import {IHint} from '../store/reducers/hints';

const hintsKey = new LocalKey<IHint[]>('hints', []);

const getHints = () => {
  const hints = LocalStorage.getItem(hintsKey);
  
  return hints || [];
};

const setHints = (hints: IHint[]) => {
  LocalStorage.setItem(hintsKey, hints);
};

const pushHint = (newHint: IHint) => {
  const hints = getHints();
  const hint = hints.find(item => item.name === newHint.name);

  if (hint) {
    return getHints();
  }

  hints.push(newHint);
  setHints(hints);
  return getHints();
};

const completeHint = (hintName: string) => {
  const hints = getHints();
  const hint = hints.find(item => item.name === hintName);
  
  if (!hint) {
    return getHints();
  }
  
  hint.completed = true;
  
  setHints(hints);
  return getHints();
};

export default {
  getHints,
  setHints,
  pushHint,
  completeHint
};