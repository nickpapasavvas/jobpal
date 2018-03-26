import React from "react";
import PropTypes from "prop-types";

const List = props => {
  console.log("props", props);
  let visibleData = props.data.slice(
    20 * (props.activePage - 1),
    20 * (props.activePage - 1) + 20
  );
  return (
    <div> {visibleData.map(post => <p key={post.name}>{post.id}</p>)}</div>
  );
};

List.displayName = "List";
List.propTypes = {
  activePage: PropTypes.number.isRequired,
  data: PropTypes.arrayOf({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default List;
