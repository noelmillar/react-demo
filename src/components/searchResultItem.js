import React from 'react';

class SearchResultItem extends React.Component {
	render(){
		return (
		<li className="search-result-item">
			<h3>{this.props.firstName} {this.props.lastName}</h3>
			<p>Campaign: {this.props.campaign}</p>
		</li>
		)
	}
}

export default SearchResultItem