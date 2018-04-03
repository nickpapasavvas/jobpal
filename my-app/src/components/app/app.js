import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ListAndPaginator from "../list-and-paginator/";
import DataProvider from "../data-provider/";
import "./app.css";

class App extends Component {
  static displayName = "App";
  state = {
    activePage: 1
  };

  componentWillMount() {
    const activePage = parseInt(this.props.location.search.slice(6), 10) || 1;
    this.setState({ activePage });
  }

  componentWillReceiveProps(nextProps) {
    const activePage = parseInt(nextProps.location.search.slice(6), 10) || 1;
    this.setState({ activePage });
  }

  handlePageChange = pageNumber => {
    this.props.history.push(`/posts?page=${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Built By Nick Papasavvas</h1>
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

export default withRouter(App);
