
const HINT_OPEN_TASK = 'HINT_OPEN_TASK';

interface IHintEvent {
  subscribe(sub: () => void): void
  unsubscribe(sub: () => void): void
  checkSubscribe(sub: () => void): boolean
  dispatch(): void
}

class HintEvent implements IHintEvent{
  private _subs: (() => void)[];

  constructor() {
    this._subs = [];
  }

  subscribe(sub: () => void) {
    this._subs.push(sub);
  }
  
  unsubscribe(sub: () => void) {
    const subIndex = this._subs.findIndex(item => item === sub);
    
    if (subIndex === -1) {
      return;
    }
    
    this._subs.splice(subIndex, 1);
  }

  checkSubscribe(sub: () => void) {
    const subIndex = this._subs.findIndex(item => item === sub);

    return subIndex != -1;
  }
  
  dispatch() {
    this._subs.forEach(sub => sub());
  }
}

interface IHintConfig {
  name: string,
  text: string,
  event: IHintEvent
}

interface IHintsConfig {
  [item: string]: IHintConfig
}

const hints: IHintsConfig = {
  [HINT_OPEN_TASK]: {
    name: HINT_OPEN_TASK,
    text: 'Чтобы открыть задачу, нужно совершить длинное нажатие',
    event: new HintEvent()
  }
};

export default hints;
export {
  HINT_OPEN_TASK
};