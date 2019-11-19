import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, AuthForm } from 'Components';
import PropTypes from 'prop-types';

class RegisterContainer extends Component {
  render() {
    const { dispatch, userToken } = this.props;
    const page = 'register';
    return (
      <React.Fragment>
        <Layout page={page} dispatch={dispatch}>
          <AuthForm page={page} dispatch={dispatch} userToken={userToken} />
        </Layout>
      </React.Fragment>
    );
  }
}

RegisterContainer.propTypes = {
  userToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

RegisterContainer.defaultProps = {
  userToken: '',
};

function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterContainer);
