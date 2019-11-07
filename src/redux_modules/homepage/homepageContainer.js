import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Test } from 'Components';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { validateUserToken } from 'ReduxModules/auth/authActions';

const cookies = new Cookies();

class HomepageContainer extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const token = cookies.get('token');
    console.log('token ------', token);
    reduxStore.dispatch(validateUserToken(token));
    return {};
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Test />
        </Layout>
      </React.Fragment>
    );
  }
}

HomepageContainer.propTypes = {
  userToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

HomepageContainer.defaultProps = {
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
)(HomepageContainer);
