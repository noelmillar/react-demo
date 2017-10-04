import React from 'react';

class SearchResults extends React.Component {
	_displayResults() {
		console.log(this.props.searchData)
		// data.map((item) => { return (<Component prop=item.field />)})
	}

	render(){
		return (
			<div>
			  <h3>Results</h3>
			  <ul>
			  	{this._displayResults()}
			  </ul>
			</div>
		)
	}
}

export default SearchResults