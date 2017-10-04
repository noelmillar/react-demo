import React from 'react';
import SearchField from './components/searchField';
import SearchResults from './components/searchResults';

class App extends React.Component {

  constructor() {
    super();

    this._fetchData()
  }

  _fetchData(){
    let that = this;

    fetch('http://localhost:3000/data/posts.json').then((response)=>{
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.posts = data;
  });
  }

  _fetchResults(event) {
    let input = event.target.value.toLowerCase()
    console.log(input)


    // Search data
    // set state
  }

  render(){
    return (
     <div className="search-app">
       <h1>Search App</h1>
       <SearchField textInput={this._fetchResults} />
       <SearchResults searchData={this._posts}/>
     </div>
    )
  }
}

export default App