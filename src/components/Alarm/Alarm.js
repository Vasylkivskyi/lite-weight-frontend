import React from 'react';
import PropTypes from 'prop-types';
import './Alarm.scss';

const Alarm = (props) => {
  const { color, msg } = props;

  return <div className={`alarm-container ${color}`}>{msg}</div>;
};

Alarm.propTypes = {
  alarm: PropTypes.string.isRequired,
};

export default Alarm;
