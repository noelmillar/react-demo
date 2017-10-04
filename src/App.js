import React from 'react';
import SearchField from './components/searchField';
import SearchResults from './components/searchResults';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData = () => {
    fetch('http://localhost:3000/data/posts.json').then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data) => {
      this.setState({
        posts: data,
        results: data
      });
    });
  }

  _fetchResults = (event) => {
    const { posts } = this.state;
    const input = event.target.value.toLowerCase()
    
    let filteredResults = posts.filter((post) => {
      let name = post.firstName.toLowerCase()
      return name.search(input) !== -1;
    })

    this.setState({results: filteredResults});
  }

  render(){
    const { results } = this.state;

    return (
     <div className="search-app">
      <h1>SEARCH INFLUENCER POSTS BY NAME</h1>
      <SearchField textInput={this._fetchResults} />
      <SearchResults searchData={results}/>
     </div>
     )
  }
}

export default App