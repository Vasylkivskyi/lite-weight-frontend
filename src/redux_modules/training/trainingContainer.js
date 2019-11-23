import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, TrainingList, JumbotronComponent } from 'Components';
import PropTypes from 'prop-types';
import { checkToken } from 'Utils/auth';
import { getExercises } from 'ReduxModules/exercises/exercisesActions';

class TrainingContainer extends Component {
  static async getInitialProps({ reduxStore, req, res }) {
    const token = checkToken({ req, res });
    await reduxStore.dispatch(getExercises(token));
    return {};
  }

  render() {
    const { dispatch, exercises } = this.props;
    return (
      <React.Fragment>
        <Layout page='training' dispatch={dispatch}>
          {!exercises.length ? (
            <JumbotronComponent
              header='Нє, не, нє!'
              about='У тебе ще немає жодних збережених вправ...'
              action='Спершу додай у свій список ті вправи, що плануєш виконувати на тренуваннях. Це можуть бути наприклад: присідання, віджимання, підтягування чи вправи на тренажерах. Обирати тобі.'
              buttonAction='Додати вправи'
              link='/exercises'
            />
          ) : (
            <TrainingList dispatch={dispatch} exercises={exercises} />
          )}
        </Layout>
      </React.Fragment>
    );
  }
}

TrainingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object),
};

TrainingContainer.defaultProps = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingContainer);
