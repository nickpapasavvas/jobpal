import React from "react";
import PropTypes from "prop-types";
import styles from "./list-item.module.css";

export const ListItem = props => (
  <div className={styles.card_container}>
    <div className={styles.card_header}>
      <div className={styles.card_author_no_cover}>
        <h3>{props.email.slice(0, props.email.indexOf("@"))}</h3>
      </div>
    </div>
    <div className={styles.card_body}>
      <div className={styles.card_title}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.card_summary}>
        <p>{props.body}</p>
      </div>
    </div>
    <div className={styles.card_footer}>
      <ul>
        <li className={styles.published_date}>
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
