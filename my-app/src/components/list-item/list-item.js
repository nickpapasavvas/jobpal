import React from "react";
import PropTypes from "prop-types";
import "./list-item.css";

export const ListItem = props => (
  <div className="card-container">
    <div className="card-header">
      <div className="card-author--no-cover">
        <h3>{props.email.slice(0, props.email.indexOf("@"))}</h3>
      </div>
    </div>
    <div className="card-body">
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="card-summary">
        <p>{props.body}</p>
      </div>
    </div>
    <div className="card-footer">
      <ul>
        <li className="published-date">
          {props.id === 1 ? "1 DAY AGO" : `${props.id} DAYS AGO`}
        </li>
      </ul>
    </div>
  </div>
);

ListItem.displayName = "ListItem";

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ListItem;
