import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, AuthForm } from 'Components';
import PropTypes from 'prop-types';

class RegisterContainer extends Component {
  render() {
    const { dispatch } = this.props;
    const page = 'register';
    return (
      <React.Fragment>
        <Layout page={page}>
          <AuthForm page={page} dispatch={dispatch} />
        </Layout>
      </React.Fragment>
    );
  }
}

RegisterContainer.propTypes = {};

RegisterContainer.defaultProps = {};

function mapStateToProps(state) {
  return state;
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
