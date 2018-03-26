import React, { Component } from "react";
import ListAndPaginator from "./list-and-paginator";
import ListDataProvider from "./list-data-provider";
import logo from "../logo.svg";
import "./App.css";

class App extends Component {
  static displayName = "App";
  state = {
    activePage: 1
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListDataProvider>
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
        </ListDataProvider>
        <ListItem />
      </div>
    );
  }
}

export default App;
