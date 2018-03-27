import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchListData } from "../../actions/list-actions";

class DataProvider extends Component {
  componentDidMount() {
    this.props.dispatch(fetchListData());
  }
  render() {
    return <div> {this.props.children(this.props.data)}</div>;
  }
}

DataProvider.displayName = "DataProvider";
DataProvider.propTypes = {
  children: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
      })
    )
  })
};

const mapStateToProps = state => ({ data: state.listData });

export default connect(mapStateToProps)(DataProvider);
