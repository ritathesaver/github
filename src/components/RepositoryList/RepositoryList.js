import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './RepositoryList.scss';
import { RepositoryItem } from '../RepositoryItem/RepositoryItem';

export const RepositoryList = (props) => {
	const [ repoList, setRepoList ] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios({
				url: 'https://api.github.com/users/ritathesaver/repos',
				method: 'GET'
			});

			setRepoList(data);
		})();
	}, []);

	return (
		<div className="list">
			<div className="list_header">Repositories:</div>
			{repoList.map((item) => <RepositoryItem item={item} key={item.id} />)}
		</div>
	);
};
