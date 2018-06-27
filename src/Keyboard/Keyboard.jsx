import React from 'react';
import PropTypes from 'prop-types';
import styles from './Keyboard_css';

const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Keyboard = ({ onClick, usedKeys }) => (
  <div style={styles.keyboard}>
    {keys.split('').map(akey => (
      <div
        style={(usedKeys.includes(akey) ? styles.blueKey : styles.key)}
        key={akey}
        onClick={() => onClick(akey)}
        onKeyPress={() => onClick(akey)}
        role="button"
        tabIndex="-1"
      >
        <span data-value={akey} >
          {akey}
        </span>
      </div>
    ))}
  </div>
);

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
  usedKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Keyboard;
