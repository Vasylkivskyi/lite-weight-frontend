import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, AuthForm } from 'Components';
import PropTypes from 'prop-types';

class LoginContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <AuthForm />
        </Layout>
      </React.Fragment>
    );
  }
}

LoginContainer.propTypes = {};

LoginContainer.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LoginContainer);
