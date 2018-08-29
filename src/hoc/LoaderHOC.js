import React, { Component } from 'react';
import './loader.css';
const LoaderHOC = WrappedComponent => {
  class HOC extends Component {
    render() {
      console.log('9999 this.props in HOC=', this.props);
      return this.props.employeeList.length === 0 ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return HOC;
};

export default LoaderHOC;
