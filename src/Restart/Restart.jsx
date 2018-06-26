import React from 'react';
import PropTypes from 'prop-types';

const Restart = ({ onClick }) => (
  <div>
    <button onClick={() => onClick()}>Nouvelle partie</button>
  </div>
);

Restart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Restart;
