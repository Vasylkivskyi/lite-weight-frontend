import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTokenFromCookies } from 'Utils/auth';
import { connect } from 'react-redux';
import { Layout, ExercisesList } from 'Components';
import { getExercises } from './exercisesAction';

class ExercisesContainer extends Component {
  static getInitialProps = async ({ reduxStore, req, res }) => {
    const token = await getTokenFromCookies(req);
    await reduxStore.dispatch(getExercises(token));
    return {};
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1>Твої вправи</h1>
          <ExercisesList dispatch={this.props.dispatch} />
        </Layout>
      </React.Fragment>
    );
  }
}

ExercisesContainer.propTypes = {};

ExercisesContainer.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExercisesContainer);
