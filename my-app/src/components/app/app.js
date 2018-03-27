import React, { Component } from "react";
import ListAndPaginator from "../list-and-paginator/";
import DataProvider from "../data-provider/";
import "./app.css";

class App extends Component {
  static displayName = "App";
  state = {
    activePage: 1
  };

  handlePageChange = pageNumber => {
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

export default App;
