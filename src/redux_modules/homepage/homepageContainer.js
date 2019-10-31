import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Test } from 'Components';

class HomepageContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Test />
        </Layout>
      </React.Fragment>
    );
  }
}

HomepageContainer.propTypes = {};

HomepageContainer.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HomepageContainer);
