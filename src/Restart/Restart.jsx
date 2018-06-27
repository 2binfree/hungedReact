import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restart_css';

const Restart = ({ onClick }) => (
  <div style={styles.restart}>
    <button onClick={() => onClick()}>Nouvelle partie</button>
  </div>
);

Restart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Restart;
