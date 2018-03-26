import React from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import "./paginator.css";

const Paginator = props => (
  <Pagination
    activePage={props.activePage}
    itemsCountPerPage={20}
    totalItemsCount={props.totalItemsCount}
    pageRangeDisplayed={3}
    onChange={props.onChange}
    innerClass="pagination"
    itemClass="itemClass"
    linkClass="linkClass"
  />
);

Paginator.propTypes = {
  activePage: PropTypes.string.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.function
};

export default Paginator;
