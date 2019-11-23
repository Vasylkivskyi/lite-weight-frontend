import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, ExercisesList } from 'Components';
import { getExercises } from './exercisesActions';
import { checkToken } from 'Utils/auth';

class ExercisesContainer extends Component {
  static getInitialProps = async ({ reduxStore, req, res }) => {
    const token = checkToken({ req, res });
    await reduxStore.dispatch(getExercises(token));
    return {};
  };

  render() {
    const { exercises, dispatch } = this.props;
    return (
      <React.Fragment>
        <Layout page='exercises' dispatch={dispatch}>
          <ExercisesList dispatch={this.props.dispatch} exercises={exercises} />
        </Layout>
      </React.Fragment>
    );
  }
}

ExercisesContainer.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object),
};

ExercisesContainer.defaultProps = {
  exercises: [],
};

function mapStateToProps(state) {
  return {
    exercises: state.exercises.rows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer);
