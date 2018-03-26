import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchListData } from "../actions/list-actions";

class ListDataProvider extends Component {
  componentDidMount() {
    this.props.dispatch(fetchListData());
  }
  render() {
    console.log("This.props.listData", this.props.listData);
    return <div> {this.props.children(this.props.listData)}</div>;
  }
}

ListDataProvider.displayName = "ListDataProvider";
ListDataProvider.propTypes = {
  children: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  listData: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  })
};

const mapStateToProps = state => ({ listData: state.listData });

export default connect(mapStateToProps)(ListDataProvider);
