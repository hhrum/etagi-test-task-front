import React, {useEffect, useMemo, useRef, useState} from 'react';

import HintProps from './Hint.types';

import './Hint.scss';
import classnames from 'classnames';

function Hint({
  text,
  show
}: HintProps) {

  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [text, textRef, setTextHeight]);
  
  const hintStyle = useMemo(() => {
    if (!show) {
      return {};
    }

    return {
      maxHeight: textHeight
    };
  }
  , [show, textHeight]);

  const hintClassName = classnames('hint', {
    'hint--show': show
  });

  return (
    <div className={hintClassName} style={hintStyle}>
      <div ref={textRef} className="hint__text">{text}</div>
    </div>
  );
}

export default Hint;