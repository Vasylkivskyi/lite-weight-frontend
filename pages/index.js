import React from 'react';
import { connect } from 'react-redux';
import { Test } from 'Components';

class Index extends React.Component {
  // static getInitialProps ({ reduxStore, req }) {
  //   const isServer = !!req
  //   reduxStore.dispatch(serverRenderClock(isServer))

  //   return {}
  // }

  // componentDidMount () {
  //   const { dispatch } = this.props
  //   this.timer = startClock(dispatch)
  // }

  // componentWillUnmount () {
  //   clearInterval(this.timer)
  // }

  render() {
    return <Test />;
  }
}

export default connect()(Index);
