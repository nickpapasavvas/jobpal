import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ListAndPaginator from "../list-and-paginator/";
import DataProvider from "../data-provider/";
import styles from "./app.module.css";

class App extends Component {
  static displayName = "App";
  state = {
    activePage: 1
  };

  componentDidMount() {
    this.updateActivePage(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateActivePage(nextProps);
  }

  updateActivePage = props => {
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    const query = new URLSearchParams(props.location.search);
    const activePage = parseInt(query.get("page"), 10) || 1;
    this.setState({ activePage });
  };

  handlePageChange = pageNumber => {
    this.props.history.push({
      pathname: "/posts",
      search: `?page=${pageNumber}`
    }); // `/posts?page=${pageNumber}`
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.title}>Built By Nick Papasavvas</h1>
        </header>
        <DataProvider>
          {({ isFetching, data }) => {
            if (!isFetching && !data.length) {
              return <p>There are no available data</p>;
            }
            return (
              <ListAndPaginator
                data={data}
                activePage={this.state.activePage}
                isFetching={isFetching}
                totalItemsCount={data.length}
                onChange={this.handlePageChange}
              />
            );
          }}
        </DataProvider>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

// export default connect(mapStateToProps)(withRouter(App));

export default withRouter(App);
