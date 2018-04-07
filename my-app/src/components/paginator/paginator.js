import React from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import styles from "./paginator.module.css";

const Paginator = props => (
  <Pagination
    activePage={props.activePage}
    itemsCountPerPage={10}
    totalItemsCount={props.totalItemsCount}
    pageRangeDisplayed={5}
    onChange={props.onChange}
    innerClass={styles.pagination}
    itemClass={styles.itemClass}
    linkClass={styles.linkClass}
    activeLinkClass={styles.activeLinkClass}
  />
);

Paginator.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Paginator;
