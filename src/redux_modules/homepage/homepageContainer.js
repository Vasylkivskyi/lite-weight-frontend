import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Test } from 'Components';
import PropTypes from 'prop-types';
import { handleAuthSSR } from 'Utils/auth';

class HomepageContainer extends Component {
  static async getInitialProps({ reduxStore, req, res }) {
    // use reduxStore to use dispatch
    await handleAuthSSR({ req, res });
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
