import React from 'react';
import PropTypes from 'prop-types';

const Trials = ({ trials }) => (
  <div className="trials">
    {trials}
  </div>
);

Trials.propTypes = {
  trials: PropTypes.number.isRequired,
};

export default Trials;
