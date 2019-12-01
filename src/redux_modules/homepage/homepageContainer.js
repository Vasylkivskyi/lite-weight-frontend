import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, JumbotronComponent, LastTrainingsList } from 'Components';
import PropTypes from 'prop-types';
import { checkToken } from 'Utils/auth';
import { getLatestTraining } from 'ReduxModules/training/trainingActions';

class HomepageContainer extends Component {
  static async getInitialProps({ reduxStore, query: { page = 1 }, req, res }) {
    // use reduxStore to use dispatch
    const token = checkToken({ req, res });
    // make requests with token
    await reduxStore.dispatch(getLatestTraining(token, res, page));
    return { page: +page };
  }

  render() {
    const { dispatch, trainings, page } = this.props;
    return (
      <React.Fragment>
        <Layout page='homepage' dispatch={dispatch}>
          {!trainings.length ? (
            <JumbotronComponent
              header='Ууупс... Нічого немає!'
              about='На цій сторінці ти бачитимеш які вправи ти виконував на попередніх тренуваннях.'
              action='Тобі потрібно створити список вправ які ти хочеш виконувати на усіх своїх тренуваннях. Будь коли ти зможеш його змінити, видалити чи додати якусь вправу.'
              buttonAction='Додати вправи'
              link='/exercises'
            />
          ) : (
            <LastTrainingsList trainings={trainings} currentPage={page} />
          )}
        </Layout>
      </React.Fragment>
    );
  }
}

HomepageContainer.propTypes = {
  userToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  trainings: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  page: PropTypes.number,
};

HomepageContainer.defaultProps = {
  userToken: '',
  trainings: [],
  page: 1,
};

function mapStateToProps(state) {
  return {
    trainings: state.trainings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
