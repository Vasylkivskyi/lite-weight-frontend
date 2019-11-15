import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTokenFromCookies } from 'Utils/auth';
import { connect } from 'react-redux';
import { Layout, ExercisesList } from 'Components';
import { getExercises } from './exercisesActions';

class ExercisesContainer extends Component {
  static getInitialProps = async ({ reduxStore, req, res }) => {
    const token = await getTokenFromCookies(req);
    await reduxStore.dispatch(getExercises(token));
    return {};
  };

  render() {
    const { exercises } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <h1>Твої вправи</h1>
          <ExercisesList dispatch={this.props.dispatch} exercises={exercises} />
        </Layout>
      </React.Fragment>
    );
  }
}

ExercisesContainer.propTypes = {};

ExercisesContainer.defaultProps = {};

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
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
)(ExercisesContainer);
