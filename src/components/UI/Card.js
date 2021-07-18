import React from 'react';

import './Card.css';

function Card(props) {
  const classes = `card + ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// 여기의 children prop은 reserved name임
// the value of the special children prop will always be the content between the opening and closing tags of your custom component
