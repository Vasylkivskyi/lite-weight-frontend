import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleAuthSSR } from 'Utils/auth';
import { connect } from 'react-redux';
import { Layout, ExercisesList } from 'Components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';

class ExercisesContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1>Твої вправи</h1>
          <ExercisesList />
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
