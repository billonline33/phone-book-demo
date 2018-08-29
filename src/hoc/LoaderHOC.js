import React, { Component } from 'react';
import './loader.css';
const LoaderHOC = propName => WrappedComponent => {
  class HOC extends Component {
    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0)
      );
    }
    render() {
      return this.isEmpty(this.props[propName]) ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return HOC;
};

export default LoaderHOC;
