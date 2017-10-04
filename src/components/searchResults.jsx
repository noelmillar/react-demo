import React from 'react';
import SearchItem from './searchItem';

class SearchResults extends React.Component {
	_displayResults = () => {
		const { searchData } = this.props;
		if (!searchData) {

		} else {
			console.log(searchData)
			searchData.map((item) => {
				return (
					<SearchItem firstName={item.firstName} />
				)
			})
		}

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