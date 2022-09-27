import {MouseEvent, TouchEvent, useState} from 'react';


const useLongClick = (
  clickCallback: () => void,
  preventDefault = true
) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [mouseLeave, setMouseLeave] = useState(false);
  const [pressTimeout, setPressTimeout] = useState<number|undefined|ReturnType<typeof setTimeout>>(undefined);
  
  const mouseDownHandler = () => {
    setPressed(true);
    setMouseLeave(false);
    
    setPressTimeout(setTimeout(() => {
      setPressTimeout(undefined);
    }, 600));
  };
  
  const mouseUpHandler = (e:MouseEvent|TouchEvent) => {
    setPressed(false);

    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(undefined);

      return;
    }
    
    if (mouseLeave) {
      setMouseLeave(false);
      return;
    }

    clickCallback();

    if (preventDefault) {
      e.preventDefault();
    }
  };
  
  const mouseLeaveHandler = () => {
    setPressed(false);
    setMouseLeave(true);
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(undefined);
    }
  };
  
  return {
    pressed,
    mouseDownHandler,
    mouseUpHandler,
    mouseLeaveHandler
  };
};

export default useLongClick;