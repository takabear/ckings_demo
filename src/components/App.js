import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RepoCardList from './RepoCardList';

class App extends React.Component {
	state = { repos: [], repoResult: [] }
	 onSearchSubmit = async (term)  => {
		const result = this.state.repos.filter(repo => repo.name.includes(term));
		this.setState({repoResult: result});
	}

	async componentDidMount() {
		const response = await axios
			.get(process.env.REACT_APP_CKINGS_GITHUB_API_URL, {});
		// response data into state
		console.log(response);
		this.setState({ repos: response.data, repoResult: response.data });
	}
	
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} repos={this.state.repos}/>
				<RepoCardList repos={this.state.repoResult} />
			</div>	
		);
	}
};

export default App;