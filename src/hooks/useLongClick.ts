import {MouseEvent, TouchEvent, useState} from 'react';


const useLongClick = (
  clickCallback: () => void,
  preventDefault = true
) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [mouseLeave, setMouseLeave] = useState(false);
  const [pressTimeout, setPressTimeout] = useState<number|undefined|ReturnType<typeof setTimeout>>(undefined);
  
  const mouseDownHandler = () => {
    setMouseLeave(false);
    setPressTimeout(setTimeout(() => {
      setPressed(true);
      setPressTimeout(undefined);
    }, 1000));
  };
  
  const mouseUpHandler = (e:MouseEvent|TouchEvent) => {
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(undefined);

      return;
    }
    
    if (mouseLeave) {
      setMouseLeave(false);
      return;
    }

    if (pressed) {
      clickCallback();
      
      setPressed(false);
      if (preventDefault) {
        e.preventDefault();
      }
    }
  };
  
  const mouseLeaveHandler = () => {
    setMouseLeave(true);
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(undefined);
    }
  };
  
  return {
    mouseDownHandler,
    mouseUpHandler,
    mouseLeaveHandler
  };
};

export default useLongClick;