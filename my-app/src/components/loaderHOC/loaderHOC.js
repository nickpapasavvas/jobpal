import React from "react";
import Loader from "../loader/";

const LoaderHOC = WrappedComponent => props =>
  props.isFetching ? <Loader /> : <WrappedComponent {...props} />;

export default LoaderHOC;
