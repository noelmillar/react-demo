import React from 'react';

class SearchItem extends React.Component {
	render(){
		return (
		<li className="searchItem">
			<p>{this.props.firstName}</p>
		</li>
		)
	}
}

export default SearchItem