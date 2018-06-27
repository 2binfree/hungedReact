import React from 'react';
import PropTypes from 'prop-types';
import styles from './Word_css';

const Word = ({ word }) => (
  <div style={styles.word}>
    {word}
  </div>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Word;
