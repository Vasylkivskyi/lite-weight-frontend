import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

const AlertContainer = ({ alerts, dispatch }) =>
  alerts !== null &&
  alerts.length !== 0 &&
  alerts.map((alert) => {
    return (
      <Alert color={alert.alertType} key={alert.id}>
        {alert.msg}
      </Alert>
    );
  });

AlertContainer.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertContainer);
