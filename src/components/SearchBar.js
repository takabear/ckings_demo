import React from 'react';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

class SearchBar extends React.Component {
	state = { term: '', value: '' };
	
	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.value);
	}

	render() {
		// Generate a list of repo for auto complete
		const autoCompleteList = this.props.repos.map(repo => {
			return repo.name
		});

		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>
							<img className="ui avatar image" src="https://avatars2.githubusercontent.com/u/17635174?v=4" alt="Culture Kings"/>
							Repo Search
						</label>
						<TextInput
							options={autoCompleteList} 
							trigger="" 
							Component="input" 
							value={this.state.value}
							onChange={e => this.setState({value:e})}
							matchAny={true}
							spacer=""
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;