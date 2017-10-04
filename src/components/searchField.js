import React from 'react';

class SearchField extends React.Component {
	
	_handleInput(event) {
		this.props.textInput(event);
	}

	render(){
		return (
			<form className="search-app">
				<input type="text" placeholder="Search Posts" onChange={this._handleInput.bind(this)}/>
			</form>
		)
	}
}

export default SearchField