/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';
import './Command.css';

function Command(props) {
  return (
    <div role="menuitem" className="command" onClick={() => props.handleClick(props.command)} onKeyUp={() => props.handleClick(props.command)} >
      <div className="value">{props.command}</div>
    </div>
  );
}

Command.propTypes = {
  command: propTypes.oneOf(['+', '-', '*', '/', '=', 'C']).isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Command;
