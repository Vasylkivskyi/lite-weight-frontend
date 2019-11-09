import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, AuthForm } from 'Components';
import PropTypes from 'prop-types';
import { removeToken } from 'ReduxModules/auth/authActions';

class LoginContainer extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(removeToken());
  };

  render() {
    const { dispatch, userToken } = this.props;
    const page = 'login';
    return (
      <React.Fragment>
        <Layout page={page}>
          <AuthForm page={page} dispatch={dispatch} userToken={userToken} />
        </Layout>
      </React.Fragment>
    );
  }
}

LoginContainer.propTypes = {
  userToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

LoginContainer.defaultProps = {
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
)(LoginContainer);
