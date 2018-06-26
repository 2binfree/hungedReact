import React from 'react';
import PropTypes from 'prop-types';
import './Keyboard.css';

const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Keyboard = ({ onClick }) => (
  <div className="keyboard">
    {keys.split('').map(akey => (
      <div className="Key" key={akey}>
        <span
          onClick={() => onClick(akey)}
          onKeyPress={() => onClick(akey)}
          data-value={akey}
          role="button"
          tabIndex="-1"
        >
          {akey}
        </span>
      </div>
    ))};
  </div>
);

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keyboard;
