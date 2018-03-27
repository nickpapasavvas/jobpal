import React, { Component } from "react";
import Loader from "../loader/";
import PropTypes from "prop-types";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return this.props.isFetching ? (
        <Loader />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

LoaderHOC.displayName = "LoaderHOC";
LoaderHOC.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default LoaderHOC;
