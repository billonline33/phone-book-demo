import React, { Component } from 'react';
const LoaderHOC = WrappedComponent => {
  class HOC extends Component {
    render() {
      console.log('9999 this.props in HOC=', this.props);
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

export default LoaderHOC;
