import React from "react";
import PropTypes from "prop-types";
import List from "./list";
import Paginator from "./paginator";
import LoaderHOC from "./LoaderHOC";

const ListAndPaginator = props => (
  <React.Fragment>
    <List
      data={props.data}
      activePage={props.activePage}
      isFetching={props.isFetching}
    />
    <Paginator
      activePage={props.activePage}
      totalItemsCount={props.totalItemsCount}
      onChange={props.onChange}
    />
  </React.Fragment>
);

export default LoaderHOC(ListAndPaginator);

ListAndPaginator.displayName = "ListAndPaginator";
ListAndPaginator.propTypes = {
  activePage: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};
