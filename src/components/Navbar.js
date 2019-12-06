import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <button onClick={props.resetGame}>Reset</button>
    </div>
  );
}

Navbar.propTypes = {
  resetGame: PropTypes.func.isRequired
};
