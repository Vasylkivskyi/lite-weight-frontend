import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, JumbotronComponent } from 'Components';
import PropTypes from 'prop-types';
import { checkToken } from 'Utils/auth';
import { getLatestTraining } from 'ReduxModules/training/trainingActions';

class HomepageContainer extends Component {
  static async getInitialProps({ reduxStore, req, res }) {
    // use reduxStore to use dispatch
    const token = checkToken({ req, res });
    // make requests with token
    await reduxStore.dispatch(getLatestTraining(token));
    return {};
  }

  render() {
    const { dispatch, trainings } = this.props;
    console.log(trainings);
    return (
      <React.Fragment>
        <Layout page='homepage' dispatch={dispatch}>
          <JumbotronComponent
            header='Ууупс... Нічого немає!'
            about='На цій сторінці ти бачитимеш які вправи ти виконував на попередніх тренуваннях.'
            action='Тобі потрібно створити список вправ які ти хочеш виконувати на усіх своїх тренуваннях. Будь коли ти зможеш його змінити, видалити чи додати якусь вправу.'
            buttonAction='Додати вправи'
            link='/exercises'
          />
        </Layout>
      </React.Fragment>
    );
  }
}

HomepageContainer.propTypes = {
  userToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  trainings: PropTypes.arrayOf(PropTypes.object),
};

HomepageContainer.defaultProps = {
  userToken: '',
  trainings: [],
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomepageContainer);
