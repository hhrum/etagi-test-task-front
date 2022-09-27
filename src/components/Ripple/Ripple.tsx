import React, {MouseEvent, TouchEvent, useState} from 'react';

import RippleProps, {RippleCircleProps} from './Ripple.types';

import './Ripple.scss';

function Ripple({
  duration = 1000
}: RippleProps) {
  const [circles, setCircles] = useState<RippleCircleProps[]>([]);

  const circleStyle = {
    animationDuration: `${duration}ms`
  };
  
  const generateCircle = (container: DOMRect, pageX: number, pageY: number) => {

    const size =
      container.width > container.height
        ? container.width
        : container.height;

    const x = pageX - container.left - size / 2;
    const y = pageY - container.top - size / 2;

    const newCircle = {
      top: y,
      left: x,
      width: size,
      height: size
    };

    setCircles([...circles, newCircle]);
  };

  const mouseDownHandle = (e: MouseEvent) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();

    generateCircle(rippleContainer, e.pageX, e.pageY);
  };

  const touchStartHandle = (e: TouchEvent) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();

    generateCircle(rippleContainer, e.touches[0].pageX, e.touches[0].pageY);
  };

  return (
    <div
      className="ripple"
      onMouseDown={mouseDownHandle}
      onTouchStart={touchStartHandle}
    >
      {circles.map((item, i) =>
        <div
          key={i}
          className="ripple__circle"
          style={{
            ...circleStyle,
            ...item
          }} />
      )}
    </div>
  );
}

export default Ripple;