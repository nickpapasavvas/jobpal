import React from "react";
import PropTypes from "prop-types";
import ListItem from "./list-item";

const List = props => {
  let visibleData = props.data.slice(
    10 * (props.activePage - 1),
    10 * (props.activePage - 1) + 10
  );
  return (
    <div>
      {visibleData.map(post => (
        <ListItem
          key={post.name}
          title={post.name}
          body={post.body}
          email={post.email}
          id={post.id}
        />
      ))}
    </div>
  );
};

List.displayName = "List";
List.propTypes = {
  activePage: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  )
};

export default List;
