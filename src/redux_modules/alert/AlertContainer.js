import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alarm } from 'Components';

const AlertContainer = ({ alerts, dispatch }) =>
  alerts !== null &&
  alerts.length !== 0 &&
  alerts.map((alert) => {
    return <Alarm color={alert.alertType} msg={alert.msg} key={alert.id} />;
  });

AlertContainer.propTypes = {
  alerts: PropTypes.array,
};

AlertContainer.defaultProps = {
  alerts: [],
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
