import React from 'react';

class SearchField extends React.Component {
	
	_handleInput(event) {
		this.props.textInput(event);
	}

	render(){
		return (
			<form className="search-form">
				<input type="text" placeholder="search by typing a name..." onChange={this._handleInput.bind(this)}/>
			</form>
		)
	}
}

export default SearchField