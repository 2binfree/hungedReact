import React from 'react';
import PropTypes from 'prop-types';
import styles from './Trials_css';

const Trials = ({ trials }) => (
  <div style={styles.trials}>
    Essais : {trials}
  </div>
);

Trials.propTypes = {
  trials: PropTypes.number.isRequired,
};

export default Trials;
