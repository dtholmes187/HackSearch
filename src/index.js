import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./components/search_bar";
import ResultList from "./components/result_list";
import ResultDetail from "./components/result_detail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selectedResult: null
    };

    this.keywordSearch("surfboards");
  }

  keywordSearch(term) {
    axios.post('/fn/holodex/search', {
      entryType: "record", queryString : term}, results => {
      this.setState({
        results: results,
        selectedResult: results[0]
      });
    });
  }

  render() {
    const keywordSearch = _.debounce(term => {
      this.keywordSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={keywordSearch} />
        <ResultDetail result={this.state.selectedResult} />
        <ResultList
          onResultSelect={selectedResult => this.setState({ selectedResult })}
          Results={this.state.results}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
