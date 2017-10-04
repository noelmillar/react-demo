import React from 'react';
import SearchResultItem from './searchResultItem';

class SearchResults extends React.Component {
	_displayResults = () => {
		const { searchData } = this.props;
		if (!searchData) {

		} else {
			console.log(searchData)
			return searchData.map((item) => {
				return (
					<SearchResultItem 
						firstName={item.firstName}
						lastName={item.lastName}
						campaign={item.campaign}
						key={item.id} />
				)
			})
		}

	}

	render(){
		return (
			<div className="search-container">
			  <h3>RESULTS</h3>
			  <ul className="search-results">
			  	{this._displayResults()}
			  </ul>
			</div>
		)
	}
}

export default SearchResults