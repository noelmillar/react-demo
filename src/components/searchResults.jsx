import React from 'react';

class SearchResults extends React.Component {
	_displayResults = () => {
		// data.map((item) => { return (<Component prop=item.field />)})
	}

	componentDidUpdate() {
		console.log(this.props)
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