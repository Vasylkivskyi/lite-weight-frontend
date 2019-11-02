import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, AuthForm } from 'Components';
import PropTypes from 'prop-types';

class RegisterContainer extends Component {
  render() {
    const page = 'register';
    return (
      <React.Fragment>
        <Layout page={page}>
          <AuthForm page={page} />
        </Layout>
      </React.Fragment>
    );
  }
}

RegisterContainer.propTypes = {};

RegisterContainer.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(RegisterContainer);
