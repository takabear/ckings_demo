import React from 'react';
import Moment from 'moment';

const RepoCardList = props => {
	//List of Repo Cards components
	const repos = props.repos.map((repo) => {		
		return (
			<div className="ui card" key={repo.id} style={{height: '350px', margin: '1em auto'}}>
				<div className="content" style={{height: '60px'}}>
					<div className="header">{repo.name}</div>
				</div>
				<div className="content" style={{height: '120px'}}>
					<div className="description">
						{repo.description}
					</div>
				</div>
				<div className="content">
					<div className="description" >
						Fork: {repo.fork ? (
							<i className="check icon" />
						) : (
							<i className="close icon" />
						)}
					</div>
				</div>
				<div className="content">
					<div className="description" >
						Stargazers: {repo.stargazers_count }
					</div>
				</div>
				<div className="content">
					<div className="description">
						Action: <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><i className="linkify icon"></i></a>
					</div>
				</div>
				<div className="extra content">
					<span className="right floated">
						Created {Moment(repo.created_at, "YYYYMMDD").fromNow()}
					</span>
				</div>
			</div>
		);
	});
	return <div className="ui grid container">{repos}</div>;
}

export default RepoCardList;


  