import React, {useEffect, useState} from 'react';

import Hint from '../Hint';

import useAppSelector, {getHint, getTotalPages} from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';

import hints, {HINT_OPEN_TASK} from '../../../config/hints';

import './OpenTaskHint.scss';
import {completeHintAction, pushHintAction} from '../../../store/reducers/hints/HintsReducer';

const hint = hints[HINT_OPEN_TASK];

function OpenTaskHint() {
  const [handleEvent, setHandleEvent] = useState<(() => void)|null>(null);

  const dispatch = useAppDispatch();
  const hintInfo = useAppSelector(getHint(hint.name));
  const totalPages = useAppSelector(getTotalPages);

  // Инициализируем фукнцию обработчика в useEffect, чтобы ссылка сохранилась
  useEffect(() => {
    setHandleEvent(() => () => dispatch(completeHintAction(hint.name)));
    
    return () => {
      if (handleEvent) {
        hint.event.unsubscribe(handleEvent);
      }
      setHandleEvent(null);
    }; 
  }, []);

  // Основное взаимодействие с подсказкой
  useEffect(() => {
    // Если информации о подсказке нет в сторе, загружаем
    if (!hintInfo) {
      dispatch(pushHintAction({
        name: hint.name,
        completed: false
      }));
      return;
    }

    // Если обработчик не инициализирован, выходим
    if (!handleEvent) {
      return;
    }

    // Если подсказка завершена, но на событие до сих пор подписаны, то отписываемся
    if (
      hintInfo.completed
      && hint.event.checkSubscribe(handleEvent)
    ) {
      hint.event.unsubscribe(handleEvent);
    }

    // выходим из функции, если событие завершено, или нет задач, или уже подписаны
    if (
      hintInfo.completed
      || totalPages == 0
      || hint.event.checkSubscribe(handleEvent)
    ) {
      return;
    }
    
    hint.event.subscribe(handleEvent);
  }, [hintInfo, totalPages, handleEvent]);

  return (
    <Hint
      text={hint.text}
      show={hintInfo && totalPages > 0 ? !hintInfo.completed : false}
    />
  );
}

export default OpenTaskHint;