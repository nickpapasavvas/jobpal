import React from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import "./paginator.css";

const Paginator = props => (
  <Pagination
    activePage={props.activePage}
    itemsCountPerPage={10}
    totalItemsCount={props.totalItemsCount}
    pageRangeDisplayed={5}
    onChange={props.onChange}
    innerClass="pagination"
    itemClass="itemClass"
    linkClass="linkClass"
  />
);

Paginator.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Paginator;
