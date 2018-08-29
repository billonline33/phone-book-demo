import React, { Component } from 'react';
import './loader.css';
const LoaderHOC = propName => WrappedComponent => {
  class HOC extends Component {
    render() {
      return this.props[propName].length === 0 ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return HOC;
};

export default LoaderHOC;
